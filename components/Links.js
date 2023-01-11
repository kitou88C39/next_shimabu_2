import { Inter } from '@next/font/google';
import styles from './Links.module.css';

const inter = Inter({ subsets: ['latin'] });
const ITEMS = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentation & rarr;',
    description:
      'Find in-depth information about Next.js features and&nbsp;API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn & rarr;',
    description:
      'Learn about Next.js in an interactive course with&nbsp;quizzes!',
  },
  {
    href: 'https://nextjs.org/templates ',
    title: 'Templates & rarr;',
    description:
      'Discover and deploy boilerplate example Next.js&nbsp;projects.',
  },
  {
    href: 'https://nextjs.org/deploy',
    title: 'Deploy & rarr;',
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
            <a href={item.href} className={styles.card}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
            </a>
          );
        })}

        {/* <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Learn <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

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
        </a> */}
      </div>
    </>
  );
}
