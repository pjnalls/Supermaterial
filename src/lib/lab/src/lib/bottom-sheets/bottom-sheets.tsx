import styles from './bottom-sheets.module.scss';

/* eslint-disable-next-line */
export interface BottomSheetsProps {}

export function BottomSheets(props: BottomSheetsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BottomSheets!</h1>
    </div>
  );
}

export default BottomSheets;
