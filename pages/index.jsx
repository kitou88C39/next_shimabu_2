import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer/index';
import { Main } from '../components/Main/index';
import { Header } from '../components/Header/index';

const inter = Inter({ subsets: ['latin'] });

const handleClick = (e, foo) => {
  console.log(e.target.href);
  e.preventDefault();
  alert(foo);
};

export default function Home() {
  const foo = 1;

  return (
    <div className={styles.conteiner}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a
        href='/about '
        onClick={(e) => {
          handleClick(e, foo);
        }}
      >
        Button
      </a>
      {/* <a
        href='/about'
        onClick={(e) => {
          e.preventDefault();
          alert(123);
        }}
      >
        Button
      </a> */}
      {/* <button
        onClick={function () {
          alert(123);
        }}
      >
        Button
      </button> */}
      <Main page='index' />
      <Footer />
    </div>
  );
}
