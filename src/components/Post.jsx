import styles from './Post.module.css';

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="http://github.com/Brenobn.png" />
        </div>
        <div className={styles.authorInfo}> 
          <strong>Breno Leonardo</strong>
          <span>Web Developer</span>
        </div>

        <time title='20 de março às 12:19' dateTime='2024-03-20 12:19:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>
        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      </p>
      <p>👉 {' '} <a href="">jane.design/doctorcare</a></p>
      <p>
        <a href="">#novoprojeto</a> {' '}
        <a href="">#nlw</a> {' '}
        <a href="">#rocketseat</a>
      </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  );
}