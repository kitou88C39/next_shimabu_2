import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Header } from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home(props) {
  return (
    <div className={styles.conteiner}>
      <Head>
        <title>About page</title>
      </Head>
      <Header />
      <Main page='about' />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? '非表示' : '表示'}
      </button>
      {props.isShow ? <h2>{props.dobuleCount}</h2> : null}
      <hr />
      <input type='text' value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Footer />
    </div>
  );
}
