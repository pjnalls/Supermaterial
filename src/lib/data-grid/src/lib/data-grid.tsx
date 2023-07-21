import styles from './data-grid.module.scss';

/* eslint-disable-next-line */
export interface DataGridProps {}

export function DataGrid(props: DataGridProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DataGrid!</h1>
    </div>
  );
}

export default DataGrid;
