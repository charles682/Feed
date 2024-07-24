import {Post} from './Post';
import {Header} from './components/Header' 


import './global.css'

function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Charles Melo"
        content="lorem ipsum"
        />
     </div> 
  )
}

export default App
