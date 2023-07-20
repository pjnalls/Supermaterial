import styles from './lib-layout.module.scss';

/* eslint-disable-next-line */
export interface LibLayoutProps {}

export function LibLayout(props: LibLayoutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibLayout!</h1>
    </div>
  );
}

export default LibLayout;
