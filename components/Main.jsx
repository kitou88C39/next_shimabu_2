import { Inter } from '@next/font/google';
import styles from './Main.module.css';
import { Links } from './Links';
import { Headline } from './Headline';

const inter = Inter({ subsets: ['latin'] });

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        code={<code className={styles.code}>pages/{props.page}.js</code>}
      </Headline>
      <Links />
    </main>
  );
}
