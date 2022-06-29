export type job =  {
    company: string,
    title: string,
    dates: string,
    description: string,
    icon: any
}

export type jobs = job[]

export const experienceData: jobs = [
    {
        company: "ITEAM CONSULTING",
        title: "JUNIOR SOFTWARE ENGINEER",
        dates: "FEBRUARY 2021 - APRIL 2021",
        description: "Working with the software consulting team to create end to end business solutions across a wide range of technologies and disciplines.",
        icon: null
    },
    {
        company: "LONGS PEAK ADVISORY",
        title: "SOFTWARE INTERN",
        dates: "",
        description: "Built and deployed Python Flask web application, automating 10 Excel tasks with drag and drop interface as well as web portal for activating UiPath automations via REST API.",
        icon: null
    },
]