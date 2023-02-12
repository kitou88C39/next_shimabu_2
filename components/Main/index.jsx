import { Inter } from '@next/font/google';
import styles from './Main.module.css';
import { Links } from '../Links/index';
import { Headline } from '../Headline';
import { useCallback } from 'react';

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

export function Main(props) {
  const [items, setItems] = useState([ITEMS]);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);
  return (
    <main className={styles.main}>
      <Headline page={props.page} handleReduce={handleReduce}>
        <code className={classes.code}>{items.length}</code>
      </Headline>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
}
