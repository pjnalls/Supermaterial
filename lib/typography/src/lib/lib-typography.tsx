import styles from './lib-typography.module.scss';

/* eslint-disable-next-line */
export interface LibTypographyProps {}

export function LibTypography(props: LibTypographyProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibTypography!</h1>
    </div>
  );
}

export default LibTypography;
