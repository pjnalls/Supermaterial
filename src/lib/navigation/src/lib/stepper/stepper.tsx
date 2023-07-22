import styles from './stepper.module.scss';

/* eslint-disable-next-line */
export interface StepperProps {}

export function Stepper(props: StepperProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Stepper!</h1>
    </div>
  );
}

export default Stepper;
