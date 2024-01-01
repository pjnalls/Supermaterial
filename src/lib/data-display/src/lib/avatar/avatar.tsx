import PropTypes from 'prop-types';
import * as avatarStyles from './avatar.module.scss';

export interface AvatarProps {
  variant: 'circle' | 'rounded' | 'square';
  size: 'thirty-six' | 'sixty-four' | 'forty-eight';
  type: 'image' | 'text' | 'icon';
  className: string;
}

export const Avatar = ({
  variant,
  size,
  type,
  className,
}: AvatarProps): JSX.Element => {
  return (
    <div
      className={`avatar ${variant} ${size} ${type} ${className} ${{
        ...avatarStyles,
      }}`}
    >
      {['icon', 'text'].includes(type) && (
        <div className="PN">
          {type === 'text' && <>PN</>}

          {type === 'icon' && <>🦸</>}
        </div>
      )}
    </div>
  );
};

export const AvatarPropTypes = {
  variant: PropTypes.oneOf(['circle', 'rounded', 'square']),
  size: PropTypes.oneOf(['thirty-six', 'sixty-four', 'forty-eight']),
  type: PropTypes.oneOf(['image', 'text', 'icon']),
};

export default Avatar;
