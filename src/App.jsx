import { Header } from "./components/Header";
import { Post }from './Post';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Breno Leonardo" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam quo nesciunt nostrum commodi dolor consequuntur laboriosam omnis dignissimos, quos doloremque facere velit, possimus veniam molestiae nemo, ipsa dolorem provident." 
      />
      
      <div className={styles.wrapper}>
        <aside></aside>
        <main>

        </main>
      </div>
    </div>
  )
}