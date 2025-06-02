import styles from './introduction.module.css'
import '@styles/TagsStyles.css'

export default function Introduction() {

    const date = new Date()
    const currentYear: number = date.getFullYear()
    const currentMonth: number = date.getMonth()

    const myAge: number = currentYear - 2006 - (currentMonth >= 4 ? 0 : 1)
    const myExperience: number = currentYear - 2020

    return (
        <div className={styles.GlobalIntroduction}>
            <h1>Welcome to my portfolio</h1>
            <h4>A <em>FullStack Developer</em>, <em>Artist</em> and <em>"The Path's" Creator</em></h4>
            <p>Hello, my name is Gabriel Xavier, I'm {myAge} years old, I'm a <b>Fullstack Developer</b> looking for a <b>first job</b> or <b>freelancer</b>. I have {myExperience} years of experience studying the area with {myExperience*0.6} years of <b>Front-end</b>. {myExperience*0.2} year of <b>Algorithm</b>, and {myExperience*0.2} year of <b>Back-end</b>.</p>
        </div>
    )
}