import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react'

export default function Home() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const articles = [];
    (async () => {
      const querySnapshot = await getDocs(collection(db, "articles"))
      querySnapshot.forEach(doc => {
        articles.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
        })
      })
      setArticles(articles)
    })()
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>カエルの日記帳</title>
        <meta name="description" content="カエルの日常" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          カエルの日記帳
        </h1>

        <p className={styles.description}>
          カエルの日常
        </p>

        <div className={styles.grid}>
          {articles.map(article => {
            return (
              <Link key={article.id} href={`/article?id=${article.id}`}>
                <a className={styles.card}>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </a>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
