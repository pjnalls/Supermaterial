import PropTypes from 'prop-types';
import * as badgeStyles from './badge.module.scss';

export interface BadgeProps {
  tile: boolean;
  dot: boolean;
  bordered: boolean;
  variant: 'none' | 'icon' | 'text';
  className: string;
}

export const Badge = ({
  tile,
  dot,
  bordered,
  variant,
  className,
}: BadgeProps): JSX.Element => {
  return (
    <div
      className={`badge dot-${dot} ${variant} bordered-${bordered} tile-${tile} ${className} ${{
        ...badgeStyles,
      }}`}
    >
      {!dot && (
        <div className="span">
          {variant === 'text' && <>9</>}

          {variant === 'icon' && <>🦸</>}
        </div>
      )}
    </div>
  );
};

export const BadgePropTypes = {
  tile: PropTypes.bool,
  dot: PropTypes.bool,
  bordered: PropTypes.bool,
  variant: PropTypes.oneOf(['none', 'icon', 'text']),
};

export default Badge;
