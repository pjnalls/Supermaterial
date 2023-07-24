import styles from './stack.module.scss';

/* eslint-disable-next-line */
export interface StackProps {}

export function Stack(props: StackProps) {
  return (
    <div className={styles['container']}>
      <h1 className="placeholder-text">Stack</h1><br/><br/><h3  className="placeholder-text">This component is still in development.<br /><br/>Please refer to the "Design" tab below for its 🎨Figma design.</h3>
    </div>
  );
}

export default Stack;
