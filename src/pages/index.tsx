import type { NextPage } from 'next'
import { useRemoveContent } from '../hooks/useRemoveContent'
import styles from './home.module.scss'

const Home: NextPage = () => {
  const { removeContent } = useRemoveContent()
  return (
    <main className={styles.Container}>
      {removeContent && <div className={styles.mobileContent}>

        <h1> &nbsp;Great Coffee </h1>
        <h2 className={styles.addshadow}>&lt;Great Code /&gt;</h2>
        <img src='/assets/rocket-coffee.png' alt="Fotos de cafés" />
      </div>}
    </main>
  )
}

export default Home
