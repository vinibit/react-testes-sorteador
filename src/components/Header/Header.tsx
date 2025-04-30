import styles from './Header.module.css' 

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.imgLogo} role="img" aria-label="Logo do sorteador"></div>
            <img className={styles.logo} src="/imagens/participante.png" alt="Desenho do participante com um presente na mão" />
        </header>
    )
}

export default Header