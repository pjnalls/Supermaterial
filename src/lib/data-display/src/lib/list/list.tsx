import styles from './list.module.scss';

/* eslint-disable-next-line */
export interface ListProps {}

export function List(props: ListProps) {
  return (
    <div className={styles['container']}>
      <h1 className="placeholder-text">List</h1><br/><br/><h3  className="placeholder-text">This component is still in development.<br /><br/>Please refer to the "Design" tab below for its 🎨Figma design.</h3>
    </div>
  );
}

export default List;
