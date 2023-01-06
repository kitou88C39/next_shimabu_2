import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Links } from '../components/Links';
import { Headline } from '../components/Headline';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.conteiner}>
      <Head>
        <title>About page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Headline page='About'>
          // number={1111}
          // array={[1, 2, 3]}
          // obj={{ foo: 'foo', bar: 'bar' }}
          // boolean code={<code className={styles.code}>pages/about.js</code>}
          <code className={styles.code}>pages/about.js</code>
          //onClick={() => alert('クリック')}
        </Headline>

        {/* <Headline title='About Page' page='About' /> */}
        <Links />
      </main>
      <Footer />
    </div>
  );
}
