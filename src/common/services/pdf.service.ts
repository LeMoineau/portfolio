import jsPDF from 'jspdf'
import { ProjectData } from '../resources/interfaces/project-data'
import { projectsData } from '../resources/data/projects-data'
import { MONTSERRAT_BOLD_FONT } from '../fonts/montserrat-bold'
import { MONTSERRAT_FONT } from '../fonts/montserrat'

class PDFService {
    _darkGrayBg: string = '#494e5f'
    _lightBlueBg: string = '#e3f1ff'
    _darkBlueTextColor: string = '#1800ad'
    _blackTextColor: string = '#33322f'
    _lightBlueTextColor: string = '#b3d8ff'
    _whiteTextColor: string = '#fefefa'
    _absoluteWhite: string = '#ffffff'
    _lightGreyBg: string = '#eeefef'

    _bgFrontPage: string = this._darkGrayBg

    _addFrontPage(doc: jsPDF, locale: string, generatedDate?: boolean) {
        const pageWidth = doc.internal.pageSize.getWidth() // ~210mm
        const pageHeight = doc.internal.pageSize.getHeight() // ~297mm

        doc.setFillColor(...this.hexToRgb(this._bgFrontPage))
        doc.rect(0, 0, pageWidth, pageHeight, 'F')

        // Titres de la couverture
        doc.setTextColor(...this.hexToRgb(this._lightBlueBg))
        doc.setFont('Montserrat', 'bold')
        doc.setFontSize(36)
        doc.text('Pierre FABER', pageWidth / 2, 85, {
            align: 'center',
        })
        doc.text('PORTFOLIO', pageWidth / 2, 100, {
            align: 'center',
        })

        doc.setFont('Montserrat', 'normal')
        doc.setFontSize(18)
        doc.text('Projets & Réalisations', pageWidth / 2, 115, {
            align: 'center',
        })

        if (!!generatedDate) {
            doc.setFontSize(11)
            doc.setTextColor(...this.hexToRgb(this._whiteTextColor))
            const dateStr = new Date().toLocaleDateString(locale)
            doc.text(`Généré le ${dateStr}`, pageWidth / 2, 122, {
                align: 'center',
            })
        }
    }

    _addPageHeader(doc: jsPDF, project: ProjectData, locale: string) {
        const pageWidth = doc.internal.pageSize.getWidth() // ~210mm
        doc.setFillColor(this._darkGrayBg)
        doc.rect(0, 0, pageWidth, 25, 'F')

        // Titre du projet
        doc.setTextColor(this._lightBlueTextColor)
        doc.setFont('Montserrat', 'bold')
        doc.setFontSize(18)
        doc.text(project.title.toUpperCase(), 15, 16)

        // Date du projet (à droite dans le header)
        doc.setFont('Montserrat', 'normal')
        doc.setFontSize(10)
        const projDate =
            project.date instanceof Date
                ? project.date.toLocaleDateString(locale, {
                      year: 'numeric',
                      month: 'long',
                  })
                : project.date
        doc.text(projDate, pageWidth - 15, 15, { align: 'right' })
    }

    _addSectionTitle(
        doc: jsPDF,
        title: string,
        x: number,
        y: number,
        width: number,
        height: number = 13
    ) {
        doc.setFillColor(this._lightBlueBg)
        doc.rect(x, y, width, height, 'F')

        doc.setTextColor(this._darkBlueTextColor)
        doc.setFont('Montserrat', 'bold')
        doc.setFontSize(12)
        doc.text(title, x + 5, y + 8)
    }

    /**
     * Génère un PDF Portfolio à partir d'une liste de projets avec jsPDF.
     * @param {Array} projects - La liste des projets.
     * @param {string} locale - La langue à utiliser (ex: 'fr', 'en').
     * @param {string} outputName - Le nom du fichier PDF généré (pour le navigateur).
     */
    async generatePortfolio(
        projects: ProjectData[],
        locale = 'fr',
        outputName = 'Pierre FABER - Portfolio.pdf'
    ) {
        // Création du document A4 (les unités sont en mm par défaut avec jsPDF)
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        })
        doc.addFileToVFS('/fonts/Montserrat.ttf', MONTSERRAT_FONT)
        doc.addFont('/fonts/Montserrat.ttf', 'Montserrat', 'normal')
        doc.addFileToVFS('/fonts/Montserrat-bold.ttf', MONTSERRAT_BOLD_FONT)
        doc.addFont('/fonts/Montserrat-bold.ttf', 'Montserrat', 'bold')

        doc.setFont('Montserrat', 'normal')

        // --- 1. PAGE DE COUVERTURE ---
        this._addFrontPage(doc, locale)

        // --- 2. BOUCLE SUR LES PROJETS ---
        let projectCounter = 1
        projects.forEach((project) => {
            console.log(
                'creating page:',
                project.title,
                `(${projectCounter++}/${projects.length})`
            )
            // Ajouter une nouvelle page pour chaque projet
            doc.addPage()

            // Header du projet (Bandeau coloré)
            this._addPageHeader(doc, project, locale)

            // Coordonnées de notre grille à 2 colonnes (en mm)
            const leftColX = 15
            const rightColX = 115
            const colWidth = 90
            let currentY = 35

            // --- COLONNE DE GAUCHE : TEXTES ---
            if (
                project.desc[locale]?.trim().length > 0 ||
                project.desc[Object.keys(project.desc)[0]]?.trim().length > 0
            ) {
                this._addSectionTitle(
                    doc,
                    'Description',
                    leftColX,
                    currentY,
                    colWidth
                )
                currentY += 20

                doc.setFont('Montserrat', 'normal')
                doc.setFontSize(10)
                doc.setTextColor(this._blackTextColor)
                const descText =
                    project.desc[locale] ||
                    project.desc[Object.keys(project.desc)[0]] ||
                    'Pas de description'
                let splitDesc = doc.splitTextToSize(descText, colWidth)
                doc.text(splitDesc, leftColX, currentY)
                currentY += splitDesc.length * 5
            }

            // Tags
            if (project.tags && project.tags.length > 0) {
                this._addSectionTitle(doc, 'Tags', leftColX, currentY, colWidth)
                currentY += 20

                doc.setFont('Montserrat', 'normal')
                doc.setFontSize(9)

                let badgeX = leftColX
                const badgePadding = 3
                const badgeHeight = 6

                project.tags.forEach((tech) => {
                    const textWidth = doc.getTextWidth(tech)
                    const badgeWidth = textWidth + badgePadding * 2

                    // Retour à la ligne si le badge dépasse de la colonne de gauche
                    if (badgeX + badgeWidth > leftColX + colWidth) {
                        badgeX = leftColX
                        currentY += badgeHeight + 2
                    }

                    // Dessin du badge
                    doc.setFillColor(this._lightGreyBg)
                    doc.rect(badgeX, currentY - 4, badgeWidth, badgeHeight, 'F')
                    doc.setTextColor(this._blackTextColor)
                    doc.text(tech, badgeX + badgePadding, currentY)

                    badgeX += badgeWidth + 2 // Espace entre les badges
                })
                currentY += 15
            }

            // Stack Technique (Badges)
            if (project.stack && project.stack.length > 0) {
                this._addSectionTitle(
                    doc,
                    'Stack Technique',
                    leftColX,
                    currentY,
                    colWidth
                )
                currentY += 20

                doc.setFont('Montserrat', 'normal')
                doc.setFontSize(9)

                let badgeX = leftColX
                const badgePadding = 3
                const badgeHeight = 6

                project.stack.forEach((tech) => {
                    const textWidth = doc.getTextWidth(tech)
                    const badgeWidth = textWidth + badgePadding * 2

                    // Retour à la ligne si le badge dépasse de la colonne de gauche
                    if (badgeX + badgeWidth > leftColX + colWidth) {
                        badgeX = leftColX
                        currentY += badgeHeight + 2
                    }

                    // Dessin du badge
                    doc.setFillColor(this._lightGreyBg)
                    doc.rect(badgeX, currentY - 4, badgeWidth, badgeHeight, 'F')
                    doc.setTextColor(this._blackTextColor)
                    doc.text(tech, badgeX + badgePadding, currentY)

                    badgeX += badgeWidth + 2 // Espace entre les badges
                })
                currentY += 15
            }

            // Détails supplémentaires
            if (project.details && project.details[locale]) {
                this._addSectionTitle(
                    doc,
                    'Détails',
                    leftColX,
                    currentY,
                    colWidth
                )
                currentY += 20

                doc.setFont('Montserrat', 'normal')
                doc.setFontSize(10)
                doc.setTextColor(80, 80, 80)

                let splitDetails = doc.splitTextToSize(
                    project.details[locale],
                    colWidth
                )
                doc.text(splitDetails, leftColX, currentY)

                currentY += splitDetails.length * 5 + 10
            }

            // Liens utiles (avec propriétés cliquables)
            if (project.link || project.repository) {
                this._addSectionTitle(
                    doc,
                    'Liens',
                    leftColX,
                    currentY,
                    colWidth
                )
                currentY += 20

                doc.setFont('Montserrat', 'normal')
                doc.setFontSize(10)
                doc.setTextColor(this._darkBlueTextColor) // Couleur bleue pour les liens

                const projectKey = Object.keys(projectsData).find(
                    (k) => projectsData[k].title === project.title
                )
                if (!!projectKey) {
                    doc.textWithLink(
                        'Voir sur le site du portfolio',
                        leftColX,
                        currentY,
                        {
                            url: `https://bigstones.fr/projects/${projectKey}`,
                        }
                    )
                    currentY += 6
                }
                if (project.link) {
                    doc.textWithLink('Voir le projet', leftColX, currentY, {
                        url: project.link,
                    })
                    currentY += 6
                }
                if (project.repository) {
                    doc.textWithLink('Code Source GitHub', leftColX, currentY, {
                        url: project.repository,
                    })
                }
            }

            // --- COLONNE DE DROITE : IMAGES (FORMAT 1:1) ---
            if (project.imgs && project.imgs.length > 0) {
                let imgY = 35
                const imgSize = 80 // 80mm x 80mm (Respecte parfaitement le ratio 1:1)
                const imgSpacing = 4

                // On limite à 2 images max par page pour des raisons d'espace vertical
                project.imgs.slice(0, 2).forEach((imgData) => {
                    try {
                        // Note : En environnement web, imgData peut être une URL, un Base64 ou un Blob URL.
                        // jsPDF gère nativement les formats 'JPEG', 'PNG', 'WEBP'.
                        const ext = imgData.split('.').pop()
                        doc.addImage(
                            imgData,
                            ext === 'jpg' ? 'JPEG' : ext!.toUpperCase(),
                            rightColX,
                            imgY,
                            imgSize,
                            imgSize
                        )
                        imgY += imgSize + 4 // Espace entre les images
                    } catch (err) {
                        console.log('error loading img....', imgData, err)
                    }
                })

                if (project.imgs.length > 2) {
                    const minImgSize = imgSize / 2 - imgSpacing / 2
                    let counter = 0
                    project.imgs.slice(2, 6).forEach((imgData) => {
                        try {
                            // Note : En environnement web, imgData peut être une URL, un Base64 ou un Blob URL.
                            // jsPDF gère nativement les formats 'JPEG', 'PNG', 'WEBP'.
                            const ext = imgData.split('.').pop()
                            doc.addImage(
                                imgData,
                                ext === 'jpg' ? 'JPEG' : ext!.toUpperCase(),
                                rightColX +
                                    (counter % 2) * (40 + imgSpacing / 2),
                                imgY,
                                minImgSize,
                                minImgSize
                            )
                            counter++
                            if (counter % 2 === 0) {
                                imgY += minImgSize + imgSpacing
                            }
                        } catch (err) {
                            console.log('error loading img....', imgData, err)
                        }
                    })
                }
            }
        })

        // --- 3. SAUVEGARDE / TÉLÉCHARGEMENT ---
        // Dans un navigateur, cela déclenche le téléchargement automatique
        await doc.save(outputName, { returnPromise: true })
    }

    /**
     * Fonction utilitaire pour convertir le code couleur Hex (#ffffff) en RGB
     * au format [r, g, b]
     */
    hexToRgb(hex: string): [number, number, number] {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
        const fullHex = hex.replace(
            shorthandRegex,
            (_, r, g, b) => r + r + g + g + b + b
        )
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex)
        return result
            ? [
                  parseInt(result[1], 16),
                  parseInt(result[2], 16),
                  parseInt(result[3], 16),
              ]
            : [44, 62, 80]
    }
}

export default new PDFService()
