import CustomLink from '../../text/CustomLink'
import Divider from '../../text/Divider'
import Title from '../../text/Title'

export default function AboutITPassion() {
    return (
        <>
            <Title className="mt-12 mb-3">
                Ma passion pour l'informatique.
            </Title>
            <Divider className="my-5"></Divider>
            <p className="indent-8">
                Pour autant que je sache, j'aime depuis mes années collèges
                créer des choses sur l'ordinateur. En commençant d'abord par des
                jeux vidéos grâce au moteur de jeu{' '}
                <CustomLink href="https://docs.unity.com/" decoration>
                    Unity3D
                </CustomLink>
                , j'ai continué mon expérience de la programmation en
                développant des plugins en Java améliorant et modifiant les
                règles du jeu mondialement connu{' '}
                <span className="text-green-500 font-medium">Minecraft ⛏</span>
                . Certains sont d'ailleurs retrouvable dans l'onglet{' '}
                <CustomLink href="/projects/mcplugins" decoration>
                    Projets
                </CustomLink>{' '}
                !
            </p>
            <p className="mt-4 indent-8">
                Après cela, je me suis tourné vers les langages du Web, d'abord
                classique tel que HTML, CSS, Javascript allié au PHP et aux base
                de données MySQL puis dans un second temps, en m'intéressant aux
                modules Node.js et les nouveaux Framework Javascript avec{' '}
                <CustomLink href="https://react.dev/reference/" decoration>
                    React.js
                </CustomLink>
                ,{' '}
                <CustomLink href="https://vuejs.org/guide" decoration>
                    Vue.js
                </CustomLink>{' '}
                et{' '}
                <CustomLink href="https://angular.io/docs" decoration>
                    Angular
                </CustomLink>
                . En explorant les possibilités qu'offraient ces nouveaux outils
                puissants basé sur du Javascript mais pérénisé par du
                TypeScript, j'ai également travaillé sur des projets applicatif
                et mobile avec notamment les librairies{' '}
                <CustomLink
                    href="https://www.electronjs.org/fr/docs/latest/"
                    decoration
                >
                    Electron
                </CustomLink>{' '}
                et{' '}
                <CustomLink href="https://ionicframework.com/docs" decoration>
                    Ionic
                </CustomLink>
                . L'expérience du développement mobile s'est aussi accrue par la
                réalisation de projets avec{' '}
                <CustomLink href="https://docs.flutter.dev/" decoration>
                    Flutter
                </CustomLink>{' '}
                épaulés des bases de données{' '}
                <CustomLink href="https://firebase.google.com/docs" decoration>
                    Firebase
                </CustomLink>
            </p>
            <p className="mt-4 indent-8">
                En parallèle de ces apprentissages, j'ai pu continuer
                d'aggrandir mon champs des connaissances informatiques notamment
                grâce à ma formation et mes stages qui m'ont fait travaillé sur
                du développement plus scientifique (
                <span className="text-gray-800 font-medium">
                    Machine Learning 🤖
                </span>{' '}
                et{' '}
                <span className="text-purple-500 font-medium">
                    Data Analyse 📈
                </span>
                ) et logiciel à travers les langages tel que Python, Java et
                Java JEE.
            </p>
            <p className="mt-4 indent-8">
                Aujourd'hui, je suis heureux de continuer d'apprendre et de
                réaliser plusieurs projets personnels qui entretennent et font
                grandir mes connaissances du développement et de l'informatique
                en général !
            </p>
        </>
    )
}
