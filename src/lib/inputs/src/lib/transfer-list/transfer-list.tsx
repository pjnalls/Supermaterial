import styles from './transfer-list.module.scss';

/* eslint-disable-next-line */
export interface TransferListProps {}

export function TransferList(props: TransferListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TransferList!</h1>
    </div>
  );
}

export default TransferList;
