import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Navbar.module.css'

//IMAGES
import LogoDotket from '@assets/images/icons/dotket_icon.png'
import PrismOff from '@assets/images/prism_off.png'
import PrismOn from '@assets/images/prism_on.png'

import youtube from '@assets/images/icons/youtube.png'
import instagram from '@assets/images/icons/instagram.png'
import github from '@assets/images/icons/github.png'



interface LinksTypes {
    label: string
    url: string
    tag: string
    out?: boolean
}

interface IcoTypes {
    srcIcon: string
    url: string
    out?: boolean
}


export default function Navbar() {

    const [prism, setPrism] = useState<boolean>(false)

    const LinksPrism: LinksTypes[] = [
        {label:"Projects", url: "/projects", tag:""},
        {label:"Arts", url: "/arts", tag:""},
        {label:"About", url: "/about", tag:""},
        {label:"Blog", url: "/blog", tag:""},
        {label:"Touch me", url: "/touchme", tag:""},
        {label:"Buy a Coffee", url: "/buycoffee", tag:"buycoffee"},
        {label:"Quick", url: "/quick", tag:"quick"},
        {label:"The Path's", url: "/thepaths", tag:"thepaths"}
    ]

    const SocialMedias: IcoTypes[] = [
        {srcIcon: youtube, url: "https://youtube.com", out: true},
        {srcIcon: instagram, url: "https://instagram.com", out: true},
        {srcIcon: github, url: "https://github.com/G4brielXavier", out: true},
    ]

    const navigate = useNavigate()
    const handleRedirect = (url:string, out?:boolean) => {
        if(out)
        {
            window.open(url)
        }
        else
        {
            navigate(url)
        }
    }

    return (
        <>
        
        <div className={prism ? styles.AreaClose : styles.hiddenBlock} onClick={() => setPrism(false)}>-</div>

        <div id='Global' className={prism ? styles.MenuPrism : styles.hiddenBlock}>
            <header>
                <h3>EXPLORE MORE</h3>
            </header>
            <div className={styles.LinksPrism}>
                {LinksPrism.map(item => (
                    <p onClick={() => handleRedirect(item.url, item.out)} id={item.tag}>{item.label}</p>
                ))}
            </div>
            <div className={styles.SocialMediasGrid}>
                {SocialMedias.map(item => (
                    <img src={item.srcIcon} onClick={() => handleRedirect(item.url, item.out)} alt="" />
                ))}
            </div>
            <p className={styles.infoMenu}>How is going? :]</p>
        </div>


        <div className={styles.GlobalNavbar}>
            <div className={styles.BaseLogo} onClick={() => handleRedirect('/')}>
                <img src={LogoDotket} alt="icon_navbar" />
                <p>Hi, I'm Gabriel Xavier</p>
            </div>
            <div className={styles.Links}>
                <img src={prism ? PrismOn : PrismOff} alt="prism_icon" onClick={() => setPrism(true)} className={styles.PrismMenu} />
            </div>
        </div>
        
        
        </>
    )
} 