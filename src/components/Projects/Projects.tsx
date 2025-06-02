// CSS
import styles from './Projects.module.css'

import ProjectsData from '../../datas/ProjectsData'
import CardProject from '../CardProject'



import { useNavigate } from 'react-router-dom'


export default function Projects() {

    const navigate = useNavigate()

    return (
        <div className={styles.GlobalProjects}>
            <header>
                <p>Check out some of my best work. Got a better idea? Let’s build it together. <a onClick={() => navigate('/projects')}>View more</a></p>
                <h1>My Projects</h1>
            </header>
            <section>
                {ProjectsData.map(item => (
                    <CardProject 
                        title={item.name}
                        desc={item.desc}
                        image={item.image}
                        link={item.link}
                        out={true}
                    />
                ))}
            </section>
        </div>
    )
}