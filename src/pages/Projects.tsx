import ProjectsData from "../datas/ProjectsData"
import BoxProject from "../components/BoxProject"

import './Pages.css'

const Projects = () => {
    return (
        <div className="globalProjects">
        {ProjectsData.map(item => (
            <BoxProject
                title={item.name}
                desc={item.desc}
                image={item.image}
                link={item.link}
                out={true}
            />
        ))}
        </div>
    )
}

export default Projects