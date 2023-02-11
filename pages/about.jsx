import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Header } from '../components/Header';
import { useCounter } from 'hooks/useCounter';
import { useInputArray } from 'hooks/useInputArray';
import { useBgLightBlue } from 'hooks/useBgLightBlue';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <div className={styles.conteiner}>
      <Head>
        <title>About page</title>
      </Head>
      <Header />
      <Main page='about' />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>

      <input type='text' value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Footer />
    </div>
  );
}
