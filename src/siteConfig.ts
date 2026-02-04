export interface NavLink {
    label: string;
    href: string;
    external?: boolean;
}

export interface SiteConfiguration {
    title: string;
    name: string;
    description: string;
    href: string;
    author: string;
    locale: string;

    keywords?: string[];
    ogImage?: string;
    twitterHandle?: string;

    themeColor?: string;
    backgroundColor?: string;

    email?: string;
    phone?: string;
    address?: string;

    socials?: {
        twitter?: string;
        github?: string;
        linkedin?: string;
        youtube?: string;
        [key: string]: string | undefined;
    };

    nav: NavLink[];
    footerNav?: NavLink[];

    copyright?: string;
}

export const SITE: SiteConfiguration = {
    title: "Swim Lessons Directory",
    name: "Swim Lessons Directory",
    description: "Find the perfect swim lessons for your family. Browse specialty programs, compare schools, and read reviews.",
    href: "https://swimlessonsdirectory.com",
    author: "Becky Schmidt",
    locale: "en-US",

    socials: {
        github: "https://github.com/bschm0622",
        linkedin: "https://www.linkedin.com/in/becky--schmidt/",
        email: "beckyschmidt0622@gmail.com",
    },

    nav: [
        { label: "Home", href: "/" },
        { label: "Browse", href: "/browse" },
        { label: "About", href: "/about" },
        { label: "Private Lessons", href: "/private-swim-lessons" },
        { label: "Parent & Child", href: "/parent-child-swim-lessons" },
        { label: "Survival Swim", href: "/survival-swim-lessons" }
    ],

    footerNav: [
        { label: "Private Swim Lessons", href: "/private-swim-lessons" },
        { label: "Parent & Child", href: "/parent-child-swim-lessons" },
        { label: "Adult & Teen", href: "/adult-swim-lessons" },
        { label: "Competitive", href: "/competitive-swim-lessons" },
        { label: "Survival Swim", href: "/survival-swim-lessons" },
        { label: "Adaptive / Special Needs", href: "/special-needs-swim-lessons" },
        { label: "Mobile / At-Home", href: "/at-home-swim-lessons" },
        { label: "Browse All", href: "/browse" }
    ],

    copyright: `© ${new Date().getFullYear()} Swim Lessons Directory. All rights reserved.`,
};
