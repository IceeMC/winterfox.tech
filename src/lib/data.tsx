export interface Social {
    icon: string[];
    link: string;
}

export interface Project {
    name: string;
    icon: string;
    description: string;
    url: string;
}

export const socials: { [x: string]: Social } = {
    github: {
        icon: ['fab', 'github'],
        link: 'https://github.com/IceeMC'
    },
    discord: {
        icon: ['fab', 'discord'],
        link: 'https://discord.gg/JjHGR6vhcG'
    },
    twitter: {
        icon: ['fab', 'twitter'],
        link: 'https://twitter.com/a_ice_cube'
    },
    telegram: {
        icon: ['fab', 'telegram'],
        link: 'https://t.me/WinterFoxxo'
    },
    twitch: {
        icon: ['fab', 'twitch'],
        link: 'https://twitch.tv/IceeMC'
    },
    steam: {
        icon: ['fab', 'steam'],
        link: 'https://steamcommunity.com/id/IceeMC'
    }
};

/* TODO: Project list */
// const projects: Project[] = [];

export const bio = [
    <h2 className="heading-2" key="bio1">Just a furry who likes to program in TS/JS, C++, Go, Rust!</h2>,
    <h2 className="heading-2" key="bio2">Currently, my planned major is Computer Science & Business!</h2>
];
