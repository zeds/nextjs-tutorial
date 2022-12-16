import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Tom's Next Page</title>
    </Head>


      <Link href='./mercari'>メルカリ</Link>
      <Link href='./about'>About</Link>
      <h1 className={styles.homePageTitle}>Hello World</h1>
    </div>
  )
}
