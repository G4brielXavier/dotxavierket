import styles from './introduction.module.css'
import '@styles/TagsStyles.css'

export default function Introduction() {

    const date = new Date()
    const currentYear: number = date.getFullYear()
    const currentMonth: number = date.getMonth()

    const myAge: number = currentYear - 2006 - (currentMonth < 5 ? 1 : 0)
    const myExperience: number = currentYear - 2020

    return (
        <div className={styles.GlobalIntroduction}>
            <h1>Welcome to my portfolio</h1>
            <h4>A FullStack Developer, Artist and "The Path's" Creator</h4>
            <p>Hello, my name is Gabriel Xavier, I'm {myAge} years old, I'm a <b>Fullstack Developer</b> looking for a first job or <b>freelancer</b>. I have {myExperience} years of experience studying the area with {myExperience*0.6} years of <b>Front-end</b>. {myExperience*0.2} year of <b>Algorithm</b>, and {myExperience*0.2} year of Back-end.</p>
        </div>
    )
}