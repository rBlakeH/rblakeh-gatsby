export type job =  {
    company: string,
    title: string,
    dates: string,
    description: string,
    icon: string,
    alt: string
}

export type jobs = job[]

export const experienceData: jobs = [
    {
        company: "ITEAM CONSULTING",
        title: "JUNIOR SOFTWARE ENGINEER",
        dates: " February 2021 - April 2022",
        description: "Working with the software consulting team to create end to end business solutions across a wide range of technologies and disciplines.",
        icon: "/images/iteam.png",
        alt: "iTeam Consulting logo"
    },
    {
        company: "LONGS PEAK ADVISORY",
        title: "SOFTWARE INTERN",
        dates: "JANUARY 2020 - FEBRUARY 2021",
        description: "Built and deployed Python Flask web application, automating 10 Excel tasks with drag and drop interface as well as web portal for activating UiPath automations via REST API.",
        icon: "/images/peak.png",
        alt: "Longs Peak logo"
    },
    {
        company: "ATLAS INSTITUTE",
        title: "RESEARCH ASSISTANT",
        dates: "AUGUST - DECEMBER 2019",
        description: "Recreated real life scenes in virtual reality using 3D scanning technologies while working alongside the Thing Lab grad student team.",
        icon: "/images/cu.png",
        alt: "CU Boulder school icon"
    },
    {
        company: "YOUTH TECH INC.",
        title: "LEAD INSTRUCTOR",
        dates: "JUNE - AUGUST 2018",
        description: "Taught summer classes to children ages 7-12 covering various softwares such as Scratch and Gamemaker.",
        icon: "/images/yti.png",
        alt: "Youth tech inc logo"
    },
]