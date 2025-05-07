import styles from "./Footer.module.css"

import { PropsWithChildren } from "react"

const Footer: React.FC<PropsWithChildren> = ({ children }) => {    
    
    return (
        <footer className={styles.footer}>
            { children }
        </footer>
    )
}

export default Footer