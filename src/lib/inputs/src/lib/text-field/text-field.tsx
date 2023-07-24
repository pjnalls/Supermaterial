import styles from './text-field.module.scss';

/* eslint-disable-next-line */
export interface TextFieldProps {}

export function TextField(props: TextFieldProps) {
  return (
    <div className={styles['container']}>
      <h1 className="placeholder-text">TextField</h1><br/><br/><h3  className="placeholder-text">This component is still in development.<br /><br/>Please refer to the "Design" tab below for its 🎨Figma design.</h3>
    </div>
  );
}

export default TextField;
