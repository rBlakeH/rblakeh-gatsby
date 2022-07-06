export type link = {
    href: string,
    text: string
}

export type project = {
    title: string,
    name: string,
    description: string,
    icon: string,
    links?: link[]
}

export type projects = project[]

export const projectsData: projects = [
    {
        title: "BIG DATA PROJECT   ",
        name: "BIG DATA 2020",
        description: "Collected and analyzed tens of thousands of political tweets in an effort to forecast 2020 election results.",
        icon: "/images/flag.png",
        links: [
            {
                href: "https://docs.google.com/file/d/15v0lsamaTTCFy1NUGA_gwmA1oIJSEehq/preview",
                text: "Video Preview"
            },
            {
                href: "https://github.com/sophiaabi/BigData2020",
                text: "Repository"
            },
        ]
    },
    {
        title: "STUDENT WEB PORTAL",
        name: "CONSULTING REPORT",
        description: "Assisted Engineering Center with website redesign by conducting usability tests, administering student surveys, and utilizing Google Analytics insights.",
        icon: "/images/cu.png",
        links: [{
            href: "https://rblakeh.com/report.pdf",
            text: "View Report"
        }]
    },
    {
        title: "VIRTUAL REALITY GAME",
        name: "ESCAPE DENTENTION",
        description: "An educational virtual reality experience leading players through space as they learn about the solar system.",
        icon: "/images/unity.png",
        links: [
            {
                href: "https://drive.google.com/file/d/1Yo1msMyOGMttv46vo3s2irBsqwXu0xef/view",
                text: "Video Preview"
            },
            {
                href: "https://rblakeh.com/VR_Final.pdf",
                text: "Game Description"
            },
        ]
    },
    {
        title: "HCI PROTOTYPE",
        name: "ESERVE",
        description: "Created app prototype for mock startup eServe using Figma. Modeled as an Uber for home service projects.",
        icon: "/images/fig.png",
        links: [
            {
                href: "https://www.figma.com/proto/vRjZEE3djNFijTJyld6ZMV/eServe-template-v2?node-id=121%3A405&scaling=scale-down",
                text: "Prototype Preview"
            }
        ]
    },
    {
        title: "RADICAL DESIGN",
        name: "LOG CAM",
        description: "Designed and assembled experimental camera housing resembling a hollowed log to encourage animal interaction.",
        icon: "/images/tree2.png",
        links: null
    }
]
