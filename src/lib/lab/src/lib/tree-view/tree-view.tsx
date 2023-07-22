import styles from './tree-view.module.scss';

/* eslint-disable-next-line */
export interface TreeViewProps {}

export function TreeView(props: TreeViewProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TreeView!</h1>
    </div>
  );
}

export default TreeView;
