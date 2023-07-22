import styles from './floating-action-button.module.scss';

/* eslint-disable-next-line */
export interface FloatingActionButtonProps {}

export function FloatingActionButton(props: FloatingActionButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FloatingActionButton!</h1>
    </div>
  );
}

export default FloatingActionButton;
