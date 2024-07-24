import styles from './Siderbar.module.css';
import {PencilLine} from 'phosphor-react'

export function Siderbar(){
    return(
        <aside className={styles.siderbar}>
            <img 
                className={styles.cover} 
                src="https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt="" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/charles682.png"/>
                <strong>Diego Fernandes</strong>
                <strong>Web Developer</strong>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu Perfil
                </a>
            </footer>    
        </aside>
    )
}