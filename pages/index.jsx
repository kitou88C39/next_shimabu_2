import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer/index';
import { Main } from '../components/Main/index';
import { Header } from '../components/Header/index';
import { useCallback, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [text, setText] = useState();
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(
    (e) => {
      console.log('count');
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    //console.log('foo');
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      //console.log('bar');
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className={styles.conteiner}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button
        onClick={() => {
          setIsShow((isShow) => {
            if (isShow) {
              return false;
            }
            return true;
          });
        }}
      >
        {isShow ? '非表示' : '表示'}
      </button>
      <button
        onClick={function () {
          alert(123);
        }}
      >
        Button
      </button>
      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Main page='index' />
      <Footer />
    </div>
  );
}
