import styles from './radio-button.module.scss';

/* eslint-disable-next-line */
export interface RadioButtonProps {}

export function RadioButton(props: RadioButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RadioButton!</h1>
    </div>
  );
}

export default RadioButton;
