import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './BoxProject.module.css'

interface BoxType {
    title: string
    desc: string
    image: string
    link: string
    out: boolean
}

const BoxProject: FC<BoxType> = ({ title, desc, image, link, out }) => {
    
    const navigate = useNavigate()
    const handleNavigate = (url: string, out: boolean) => {
        if (out) {
            window.open(url)
        }
        else
        {
            navigate(url)
        }
    }


    return (
        <div className={styles.GlobalCard} onClick={() => handleNavigate(link, out)}>
            <div className={styles.ImageCard}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.Info}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default BoxProject