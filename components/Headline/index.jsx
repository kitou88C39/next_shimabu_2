import styles from './Headline.module.css';

//propsは親からのデータを引き渡す
export function Headline(props) {
  //console.log(props);
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        アイテムの数は
        {props.children}個です
      </p>
      <button onClick={props.handleReduce}>減</button>
    </div>
  );
}
