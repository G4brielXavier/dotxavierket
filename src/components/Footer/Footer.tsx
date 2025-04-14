
import { useNavigate } from 'react-router-dom'

import styles from './Footer.module.css'

import DotketIcon from '@assets/images/icons/dotket_icon.png'

export default function Footer()
{

    const navigate = useNavigate()
    const handleNavigate = (url:string) => {
        navigate(url)
    }

    return (
        <footer className={styles.GlobalFooter}>
            <div className={styles.blockOne}>
                <img src={DotketIcon} alt="dotket_icon_footer" />
                <div>
                    <p>Make by me</p>
                    <p>Copyright ©2025 All Rights Reserved.</p>
                </div>
            </div>
            <div className={styles.GridLinks}>
                <p onClick={() => handleNavigate('/arts')}>Arts</p>
                <p onClick={() => handleNavigate('/blogs')}>Blogs</p>
                <p onClick={() => handleNavigate('/thepaths')}>The Path's</p>
                <p onClick={() => handleNavigate('/projects')}>Projects</p>
            </div>
        </footer>
    )
}