import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
        <img className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500" 
        alt="" 
      />

      <div className={styles.profile}>
        <Avatar src="https://images.creativefabrica.com/products/previews/2024/03/08/ADGA7ducv/2dPVS9nyh5stTzLG84NxZKQyBxD-desktop.jpg" />
        <strong>Edson Rosa</strong>
        <span>Web Developer</span>
      </div>

      <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
    </aside>
  )
} 