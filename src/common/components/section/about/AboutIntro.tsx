import Divider from '../../text/Divider'
import Title from '../../text/Title'

export default function AboutIntro() {
    return (
        <>
            <Title className="mt-5 mb-3">
                <span className="text-green-500">Hi</span>! my name is{' '}
                <span className="text-sky-500">Pierre</span>
                <span className="text-red-400"> Faber</span>.
            </Title>
            <Divider className="my-5"></Divider>
            <p className="indent-8">
                Passionné de codage depuis{' '}
                <span className="text-amber-500 font-medium underline">
                    plus de 12 ans
                </span>
                , je suis aujourd'hui un{' '}
                <span className="text-pink-500 font-medium">
                    développeur Full-Stack, Web et Mobile
                </span>{' '}
                avec une légère préférence pour le développement web front-end !
                Travailleur qui sait s'adapter, créatif et fiable, j'aime
                apprendre de nouvelles choses et suis fier d'avoir déjà réalisé
                plusieurs projets informatiques.
            </p>
            <p className="mt-4 indent-8">
                Je suis prêt à rejoindre votre équipe dès maintenant ! 🚀
            </p>
        </>
    )
}
