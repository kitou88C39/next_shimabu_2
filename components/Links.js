import { Inter } from '@next/font/google';
import styles from './Links.module.css';

const inter = Inter({ subsets: ['latin'] });
const ITEMS = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentation  ➡ ',
    description:
      'Find in-depth information about Next.js features and&nbsp;API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn  ➡︎ ',
    description:
      'Learn about Next.js in an interactive course with&nbsp;quizzes!',
  },
  {
    href: 'https://nextjs.org/templates ',
    title: 'Templates  ➡︎ ',
    description:
      'Discover and deploy boilerplate example Next.js&nbsp;projects.',
  },
  {
    href: 'https://nextjs.org/deploy',
    title: 'Deploy  ➡︎ ',
    description:
      'Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.',
  },
];

export function Links() {
  return (
    <>
      <div className={styles.grid}>
        {ITEMS.map((item) => {
          return (
            <a key={item.href} href={item.href} className={styles.card}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
