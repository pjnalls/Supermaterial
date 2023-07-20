import styles from './lib-navigation.module.scss';

/* eslint-disable-next-line */
export interface LibNavigationProps {}

export function LibNavigation(props: LibNavigationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibNavigation!</h1>
    </div>
  );
}

export default LibNavigation;
