import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://logopng.com.br/logos/among-us-128.svg',
      name: 'Edson Rosa',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],  
    publishedAt: new Date('2024-06-28'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.creativefabrica.com/products/previews/2024/03/08/ADGA7ducv/2dPVS9nyh5stTzLG84NxZKQyBxD-desktop.jpg',
      name: 'Thiago Rosa',
      role: 'Back-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],  
    publishedAt: new Date('2024-06-30'),
  },
];



export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          } )}
        </main>
      </div>
      
    </div>
  )
}
