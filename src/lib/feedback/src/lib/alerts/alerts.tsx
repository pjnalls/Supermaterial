import styles from './alerts.module.scss';

/* eslint-disable-next-line */
export interface AlertsProps {}

export function Alerts(props: AlertsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Alerts!</h1>
    </div>
  );
}

export default Alerts;
