import styles from './pagination.module.scss';

/* eslint-disable-next-line */
export interface PaginationProps {}

export function Pagination(props: PaginationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Pagination!</h1>
    </div>
  );
}

export default Pagination;
