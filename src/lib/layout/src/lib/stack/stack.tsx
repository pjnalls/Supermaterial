import styles from './stack.module.scss';

/* eslint-disable-next-line */
export interface StackProps {}

export function Stack(props: StackProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Stack!</h1>
    </div>
  );
}

export default Stack;
