import styles from './inputs.module.scss';

/* eslint-disable-next-line */
export interface InputsProps {}

export function Inputs(props: InputsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Inputs!</h1>
    </div>
  );
}

export default Inputs;
