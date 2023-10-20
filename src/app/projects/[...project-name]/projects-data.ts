export interface ProjectData {
    title: string
    desc: string
    img: string
    tags: string[]
    date: Date
    stack: string[]
    link?: string
    repository?: string
    client?: Client[]
}

export interface Client {
    name: string
    link: string
    img: string
    bg: string
}

export const clients: { [key: string]: Client } = {
    efrei: {
        name: 'EFREI Paris',
        bg: 'bg-blue-200',
        img: '/img/efrei.webp',
        link: 'https://www.efrei.fr/',
    },
    //INSA, SGDF, Potions
}

export const projectsData: { [key: string]: ProjectData } = {
    ahoy: {
        title: 'Ahoy!',
        desc: 'Decentralized messaging mobile application with Flutter and Gun.js',
        img: '/img/ahoy.png',
        tags: ['flutter', 'firebase', 'SCRUM', 'gitlab CI/CD'],
        date: new Date(2022, 0),
        stack: [
            'flutter',
            'firebase',
            'vscode',
            'gitlab CI/CD',
            'gitlab',
            'figma',
        ],
        link: 'https://picpotions2022.pages.insa-rouen.fr/realisation/',
        repository: 'https://picpotions2022.pages.insa-rouen.fr/realisation/',
    },
    mymajor: {
        title: 'myMajor',
        desc: 'Website to help you choose a specialization at the EFREI school',
        img: '/img/mymajor.png',
        tags: [
            'HTML',
            'CSS',
            'Javascript',
            'Academic Project',
            'Figma',
            'github',
        ],
        date: new Date(2020, 4),
        stack: ['HTML', 'CSS', 'Javascript', 'vscode'],
        link: 'https://bigstones.fr/myMajor',
        repository: 'https://github.com/LeMoineau/myMajor',
    },
    blogame: {
        title: 'BloGame',
        desc: 'Blog host as a video game',
        img: '/img/blogame.png',
        tags: ['Java JEE', 'HTML/CSS/Javascript', 'SQL', 'Academic Project'],
        date: new Date(2022, 0),
        stack: [
            'Java JEE',
            'Wildfly',
            'HTML',
            'CSS',
            'Javascript',
            'AJAX',
            'SQL',
            'SQLite',
            'vscode',
        ],
        repository: 'https://github.com/LeMoineau/blogame',
    },
    bubbles: {
        title: 'Bubbles',
        desc: 'Professional Social Network where link are represented by bubbles',
        img: '/img/bubbles.png',
        tags: ['HTML/CSS/Javascript', 'PHP', 'Academic Project', 'github'],
        date: new Date(2019, 9),
        stack: [
            'HTML',
            'CSS',
            'Javascript',
            'PHP',
            'SQL',
            'phpMyAdmin',
            'AJAX',
            'wamp64',
            'vscode',
        ],
        link: 'https://bigstones.fr/Network',
        repository: 'https://github.com/LeMoineau/bubbles',
    },
    'easys-cube': {
        title: "Easy's cube",
        desc: "Humorous site about a 1x1 rubik's cube",
        img: '/img/easyscube.png',
        tags: [
            'HTML/CSS/Javascript',
            'design',
            'humouristic',
            'Academic Project',
            'github',
        ],
        date: new Date(2020, 4),
        stack: ['HTML', 'CSS', 'Javascript', 'vscode'],
        link: 'https://bigstones.fr/cube',
        repository: 'https://github.com/LeMoineau/Easy-Cube',
    },
    'extensions-chrome': {
        title: 'Extensions Chrome - Milireader2pdf & Youtube2music',
        desc: 'Extensions for Google Chrome to download music from youtube and newspaper from milibrisreader',
        img: '/img/extensions-chrome.png',
        tags: ['Javascript', 'Extensions Chrome/Mozilla', 'vscode', 'github'],
        date: new Date(2021, 3),
        stack: ['Javascript', 'Extensions Chrome/Mozilla'],
        repository: 'https://github.com/LeMoineau/milireader2pdf-Extension',
    },
    kora: {
        title: 'Kora',
        desc: 'Support desktop tool that provides basic tutorials',
        img: '/img/kora.png',
        tags: ['Electron.js', 'Javascript', 'tutoriel', 'github'],
        date: new Date(2020, 3),
        stack: ['Electron.js', 'Javascript', 'HTML', 'vscode'],
        link: 'https://bigstones.fr/kora/',
        repository: 'https://github.com/LeMoineau/kora',
    },
    mango: {
        title: 'Mango',
        desc: 'Mobile application to download and read latest manga chapters',
        img: '/img/mango.png',
        tags: [
            'Ionic',
            'AngularJS',
            'SCSS',
            'Typescript',
            'Web Scraping',
            'Mobile app',
            'NodeJS',
        ],
        date: new Date(2021, 7),
        stack: ['Ionic', 'AngularJS', 'SCSS', 'Typescript', 'vscode', 'github'],
        repository: 'https://github.com/LeMoineau/mango',
    },
    maya: {
        title: 'Maya',
        desc: 'Coded language writing web application',
        img: '/img/maya.png',
        tags: ['Electron.js', 'Web app', 'NodeJS', 'Coded language'],
        date: new Date(2021, 6),
        stack: ['Electron.js', 'Javascript', 'vscode', 'github'],
        repository: 'https://github.com/LeMoineau/maya-electron',
    },
    mcplugins: {
        title: 'Plugins Minecraft',
        desc: 'Java code which modifies the standard gameplay of the Minecraft game',
        img: '/img/mcplugins.png',
        tags: ['Plugins', 'Game', 'Java', 'Minecraft'],
        date: new Date(2018, 11),
        stack: ['Java', 'Spigot Bukkit', 'Minecraft 1.8', 'Eclipse'],
    },
    'pizza-horizon7': {
        title: 'Pizza Horizon7',
        desc: 'Pizza sales site for a charity (scout)',
        img: '/img/pizzahorizon7.png',
        tags: ['Sale site', 'Charity', 'HTML/CSS/Javascript', 'Email sender'],
        date: new Date(2020, 9),
        stack: [
            'HTML',
            'CSS',
            'Javascript',
            'PHP',
            'phpMyAdmin',
            'vscode',
            'github',
        ],
        link: 'https://bigstones.fr/pizza',
        repository: 'https://github.com/LeMoineau/pizza-horizon7',
    },
    'rummikub-java': {
        title: 'Rummikub (Java edition)',
        desc: 'Multiplayer board game',
        img: '/img/rummikub-java.png',
        tags: ['Multiplayer game', 'board game', 'Java', 'Java Socket'],
        date: new Date(2019, 8),
        stack: ['Java', 'Java Swing', 'Eclipse'],
        repository: 'https://github.com/LeMoineau/rummikub-java',
    },
    'rummikub-nodejs': {
        title: 'Rummikub (NodeJS edition)',
        desc: 'Multiplayer board game',
        img: '/img/rummikub-nodejs.png',
        tags: ['Multiplayer game', 'board game', 'NodeJS', 'Socket.io'],
        date: new Date(2019, 8),
        stack: [
            'HTML',
            'CSS',
            'Javascript',
            'NodeJS',
            'socket.io',
            'express',
            'vscode',
        ],
        repository: 'https://github.com/LeMoineau/rummikub',
    },
    'tirage-aleatoire': {
        title: 'Random drawing',
        desc: 'Configurable random drawing site',
        img: '/img/tiragealeatoire.png',
        tags: ['Sleek design', 'random drawing', 'HTML/CSS/Javascript'],
        date: new Date(2021, 7),
        stack: ['HTML', 'CSS', 'Javascript', 'JQuery', 'vscode'],
        link: 'https://bigstones.fr/tiragealeatoire',
        repository: 'https://github.com/LeMoineau/tirage-aleatoire',
    },
    'tv-replay': {
        title: 'TV Replay',
        desc: 'Configurable random drawing site',
        img: '/img/tiragealeatoire.png',
        tags: ['Sleek design', 'random drawing', 'HTML/CSS/Javascript'],
        date: new Date(2021, 7),
        stack: ['HTML', 'CSS', 'Javascript', 'JQuery', 'vscode'],
        repository: 'https://github.com/LeMoineau/tirage-aleatoire',
    },
}
