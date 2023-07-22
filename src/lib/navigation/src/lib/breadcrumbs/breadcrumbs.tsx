import styles from './breadcrumbs.module.scss';

/* eslint-disable-next-line */
export interface BreadcrumbsProps {}

export function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Breadcrumbs!</h1>
    </div>
  );
}

export default Breadcrumbs;
