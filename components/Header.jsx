import Link from 'next/link';
import { Inter } from '@next/font/google';
import styles from './Header.module.css';

const inter = Inter({ subsets: ['latin'] });

export function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        Index
        {/* <a className={styles.anchor}> Index</a> */}
      </Link>
      <Link href='/about'>
        About
        {/* <a className={styles.anchor}> About</a> */}
      </Link>
    </header>
  );
}
