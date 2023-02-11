import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Header } from '../components/Header';
import { useCallback, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [text, setText] = useState();
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(
    (e) => {
      console.log('count');
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert('同じ要素が既に存在します。');
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

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
