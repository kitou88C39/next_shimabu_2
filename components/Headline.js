import styles from '../styles/Home.module.css';

//propsは親からのデータを引き渡す
export function Headline(props) {
  console.log(props.title);
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        Get started by editing
        <code className={styles.code}>Pages/{props.page}.js</code>
      </p>
    </div>
  );
}
