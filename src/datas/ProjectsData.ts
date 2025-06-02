import DevLegends from '@assets/gifs/devLegends.gif'
import CraftCommand from '@assets/gifs/craftCommand.gif'
// import NextbotAPI from '@assets/images/projects/nextbotapi.jpg'
import ClickCommand from '@assets/gifs/clickCommand.gif'


type TypeProject = {
    name: string
    image: string
    desc: string
    link: string
    stacks: string[]
}


const ProjectsData: TypeProject[] = [
    {
        name: "DevLegends",
        image: DevLegends,
        desc: "A website that shows the programming influencers who helped me understand how to be a great programmer. This was developed using Vanilla JS with components",
        link: "https://devlegends.vercel.app/",
        stacks: ['JavaScript', 'HTML', 'CSS'],
    },
    {
        name: "CraftCommand",
        image: CraftCommand,
        desc: "A project inspired by the game Infinity Craft, but using commands.",
        link: "https://github.com/G4brielXavier/CraftCommand",
        stacks: ['Python']
    },
    {
        name: "ClickCommand",
        image: ClickCommand,
        desc: "A click game but in terminal format and using commands. It's a side-project.",
        link: "https://github.com/G4brielXavier/click-command",
        stacks: ['Python']
    },
]


export default ProjectsData