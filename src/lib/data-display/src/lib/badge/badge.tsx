import styles from './badge.module.scss';

/* eslint-disable-next-line */
export interface BadgeProps {}

export function Badge(props: BadgeProps) {
  return (
    <div className={styles['container']}>
      <h1 className="placeholder-text">Badge</h1><br/><br/><h3  className="placeholder-text">This component is still in development.<br /><br/>Please refer to the "Design" tab below for its 🎨Figma design.</h3>
    </div>
  );
}

export default Badge;
