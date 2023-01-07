import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
// import { Links } from '../components/Links';
// import { Headline } from '../components/Headline';
import { Main } from '../components/Main';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.conteiner}>
      <Head>
        <title>About page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main page='about' />
      {/* <main className={styles.main}>
        <Headline page='About'>
          <code className={styles.code}>pages/about.js</code>
        </Headline>

        <Links />
      </main> */}
      <Footer />
    </div>
  );
}
