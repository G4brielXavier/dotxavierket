// CSS
import styles from './Projects.module.css'

import ProjectsData from './ProjectsData'
import CardProject from '../CardProject'



export default function Projects() {

    return (
        <div className={styles.GlobalProjects}>
            <header>
                <p>Some of the my best projects to show. If you don't like them, let's start your best idea.</p>
                <h1>My best projects</h1>
            </header>
            <section>
                {ProjectsData.map(item => (
                    <CardProject 
                        title={item.name}
                        desc={item.desc}
                        image={item.image}
                        link={item.github}
                        out={true}
                    />
                ))}
            </section>
        </div>
    )
}