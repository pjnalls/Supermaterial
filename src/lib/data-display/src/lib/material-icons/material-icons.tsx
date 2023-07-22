import styles from './material-icons.module.scss';

/* eslint-disable-next-line */
export interface MaterialIconsProps {}

export function MaterialIcons(props: MaterialIconsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MaterialIcons!</h1>
    </div>
  );
}

export default MaterialIcons;
