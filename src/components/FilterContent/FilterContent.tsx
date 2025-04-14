import { FC, useState } from 'react'


// CSS MODULES
import styles from './FilterContent.module.css'

interface Stacks {
    label: string
    stacks: string[]
}

interface FilterContentsProps {
    tabs: string[]
    content: Stacks[]
}

const FilterContent: FC<FilterContentsProps> = ({ tabs, content }) => {

    const [tabSelected, SetTab] = useState<string>('FullStack')

    const handleTab = (e: number) => {
        SetTab(tabs[e])
    }

    const selectedTabContent = content.find(item => item.label === tabSelected)


    return (
        <div className={styles.FilterContentGlobal}>
            <header className={styles.TabsContainer}>
                {tabs.map((itemTab, index) => {
                    const qty = content.find(item => item.label === itemTab)?.stacks.length || 0

                    return (
                        <div 
                            className={tabSelected === itemTab ? styles.tabNameSelected : styles.tabName}
                            key={itemTab}
                            onClick={() => handleTab(index)}
                        >
                            <p>{itemTab}</p>
                            <p id='qty'>{qty}</p>
                        </div>
                    )

                })}
            </header>



            <section className={styles.ContentTab}>
                {selectedTabContent && (
                    <div className={styles.ContentBox}>
                        {selectedTabContent.stacks.map((stack, index) => (
                            <p key={index} className={styles.StackItem}>{stack}</p>
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}

export default FilterContent
