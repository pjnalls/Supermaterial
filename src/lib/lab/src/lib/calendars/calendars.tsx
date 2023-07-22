import styles from './calendars.module.scss';

/* eslint-disable-next-line */
export interface CalendarsProps {}

export function Calendars(props: CalendarsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Calendars!</h1>
    </div>
  );
}

export default Calendars;
