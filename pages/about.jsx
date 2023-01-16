import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Header } from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.conteiner}>
      <Head>
        <title>About page</title>
      </Head>
      <Header />
      <Main page='about' />
      <Footer />
    </div>
  );
}
