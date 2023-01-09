import styles from './Footer.module.css';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        className={styles.card}
        target='_blank'
        rel='noopener noreferrer'
      >
        <h2 className={inter.className}>
          Deploy <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Instantly deploy your Next.js site to a shareable URL
          with&nbsp;Vercel.
        </p>
      </a>
    </footer>
  );
}
