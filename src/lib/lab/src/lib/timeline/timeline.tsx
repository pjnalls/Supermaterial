import styles from './timeline.module.scss';

/* eslint-disable-next-line */
export interface TimelineProps {}

export function Timeline(props: TimelineProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Timeline!</h1>
    </div>
  );
}

export default Timeline;
