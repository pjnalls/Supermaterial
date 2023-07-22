import styles from './toggle-buttons.module.scss';

/* eslint-disable-next-line */
export interface ToggleButtonsProps {}

export function ToggleButtons(props: ToggleButtonsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ToggleButtons!</h1>
    </div>
  );
}

export default ToggleButtons;
