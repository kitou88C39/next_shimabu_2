import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer/index';
import { Main } from '../components/Main/index';
import { Header } from '../components/Header/index';
import { useCallback, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const foo = 1;

  const handleClick = (e) => {};

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className={styles.conteiner}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      <button
        onClick={function () {
          alert(123);
        }}
      >
        Button
      </button>
      <Main page='index' />
      <Footer />
    </div>
  );
}
