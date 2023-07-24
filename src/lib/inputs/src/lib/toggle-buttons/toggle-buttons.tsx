import styles from './toggle-buttons.module.scss';

/* eslint-disable-next-line */
export interface ToggleButtonsProps {}

export function ToggleButtons(props: ToggleButtonsProps) {
  return (
    <div className={styles['container']}>
      <h1 className="placeholder-text">ToggleButtons</h1><br/><br/><h3  className="placeholder-text">This component is still in development.<br /><br/>Please refer to the "Design" tab below for its 🎨Figma design.</h3>
    </div>
  );
}

export default ToggleButtons;
