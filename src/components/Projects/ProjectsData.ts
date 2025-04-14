import DevLegends from '@assets/images/projects/devlegends.png'
import CraftCommand from '@assets/images/projects/craftcommand.png'


type TypeProject = {
    name: string
    image: string
    desc: string
    github: string
    stacks: string[]
}


const ProjectsData: TypeProject[] = [
    {
        name: "DevLegends",
        image: DevLegends,
        desc: "Over here is legends developers temple.",
        github: "https://github.com/G4brielXavier/dev-legends",
        stacks: ['JavaScript', 'HTML', 'CSS'],
    },
    {
        name: "CraftCommand CLI",
        image: CraftCommand,
        desc: "If you know the Infinite Craft and you are a programmer, I want to show for you this, The Craft Command ",
        github: "https://github.com/G4brielXavier/CraftCommand",
        stacks: ['Python']
    },
    {
        name: "CraftCommand CLI",
        image: CraftCommand,
        desc: "If you know the Infinite Craft and you are a programmer, I want to show for you this, The Craft Command ",
        github: "https://github.com/G4brielXavier/CraftCommand",
        stacks: ['Python']
    },
]


export default ProjectsData