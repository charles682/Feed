import {Post} from './components/Post';
import {Header} from './components/Header' 
import { Siderbar } from './components/Siderbar';

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
          <Siderbar/>
          <main>
          <Post
            author="Charles Melo"
            content="lorem ipsum"
            />
             <Post
            author="Charles Melo"
            content="lorem ipsum"
            />
          </main>
          
      </div>
     </div> 
  )
}

export default App
