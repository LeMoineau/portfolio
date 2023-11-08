import CustomLink from '../../text/CustomLink'
import Divider from '../../text/Divider'
import Title from '../../text/Title'

export default function AboutHobbies() {
    return (
        <>
            <Title className="mt-12 mb-3">
                My <span className="text-blue-400">Hobbies</span>.
            </Title>
            <Divider className="my-5"></Divider>
            <p className="indent-8">
                Depuis mes 7 ans, je suis fier d'être{' '}
                <span className="text-green-500 font-medium">
                    Scout de France 🌳
                </span>{' '}
                et d'avoir pu vivre de nombreuse et merveilleuses expériences
                humaines et écologiques à travers toute la France avec mes
                compagnons de toujours. J'ai également eut la chance de pouvoir
                monter un projet humanitaire en Croatie pour aider l'association{' '}
                <CustomLink href="https://kuterevo.org/" decoration>
                    Kuterevo Volunters
                </CustomLink>{' '}
                et leur refuge d'ours ! Autrement, je suis{' '}
                <span className="text-blue-500 font-medium">Skateur 🛹</span> à
                mes heures perdues et j'aime beaucoup faire du sport entre amis
                et notamment du{' '}
                <span className="text-orange-500 font-medium">Basket</span> 🏀 !
                Je suis aussi amateur de musique et après avoir fait du{' '}
                <span className="text-gray-700 font-medium">Piano 🎹</span>{' '}
                pendant 7 ans, je continue aujourd'hui à apprendre les morceaux
                que j'aime !
            </p>
        </>
    )
}
