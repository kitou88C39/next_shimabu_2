import styles from './Headline.module.css';

//propsは親からのデータを引き渡す
export function Headline(props) {
  //console.log(props);
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        Get started by editing
        {props.children}
      </p>
      <button onClick={props.onClick}>ボタン</button>
    </div>
  );
}
