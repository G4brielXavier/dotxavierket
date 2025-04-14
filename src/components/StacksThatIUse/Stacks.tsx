
// CSS MODULE
import styles from './Stacks.module.css'

// EXTERNAL TS COMPONENTS
import FilterContent from '../FilterContent/FilterContent.tsx'

export default function Stacks() {
    return (
        <>
        <div className={styles.GlobalStacks}>
            <h1>Stacks that I use</h1>
            <FilterContent 
                tabs={['Front-end', 'Back-end', 'FullStack', 'Tools', 'Testing', 'CI/CD', 'Cloud']}
                content={[
                    {
                        label: 'FullStack',
                        stacks: ['Node.js', 'TypeScript', 'Python', 'Next.js', 'REST / GraphQL', 'Prisma / ORM']
                    },
                    {
                        label: 'Front-end',
                        stacks: ['React', 'HTML5', 'CSS3', 'Styled-Components', 'Redux', 'Axios', 'Fetch']
                    },
                    {
                        label: 'Back-end',
                        stacks: ['Express', 'FastAPI', 'PostgreSQL', 'JWT/Auth', 'Docker', 'Redis']
                    },
                    {
                        label: 'Tools',
                        stacks: ['Git', 'Github', 'Postman', 'Vercel', 'Netlify', 'Imsomnia']
                    },
                    {
                        label: 'Testing',
                        stacks: ['Jest']
                    },
                    {
                        label: 'CI/CD',
                        stacks: ['Github Actions', 'Vercel']
                    },
                    {
                        label: 'Cloud',
                        stacks: ['Firebase']
                    },
                ]}
            />
        </div>
        </>
    )
}