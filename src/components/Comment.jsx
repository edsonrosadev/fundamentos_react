import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content }) {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://logopng.com.br/logos/among-us-128.svg"  alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}> 
          <header>
            <div className={styles.authorAndTime}>
              <strong>Edson Rosa</strong>
              <time title="24 de Junho às 21:41h" dateTime="2022-05-11">Cerca de uma 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />

            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
         <button>
          <ThumbsUp />
          Apaudir <span>20</span>
         </button>
        </footer>
      </div>
    </div>
  )
}