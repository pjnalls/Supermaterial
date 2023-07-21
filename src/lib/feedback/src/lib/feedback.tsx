import styles from './feedback.module.scss';

/* eslint-disable-next-line */
export interface FeedbackProps {}

export function Feedback(props: FeedbackProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Feedback!</h1>
    </div>
  );
}

export default Feedback;
