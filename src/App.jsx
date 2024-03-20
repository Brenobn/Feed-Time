import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post }from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Breno Leonardo" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam quo nesciunt nostrum commodi dolor consequuntur laboriosam omnis dignissimos, quos doloremque facere velit, possimus veniam molestiae nemo, ipsa dolorem provident." 
        />

        <Post 
          author="Gabriel Buzzi"
          content="Um novo post muito legal"
        />
        </main>
      </div>
    </div>
  )
}