import PropTypes from 'prop-types';
import * as chipStyles from './chip.module.scss';

export interface ChipProps {
  size: 'default' | 'x-small' | 'small';
  variant: 'primary' | 'outlined' | 'default';
  avatar: boolean;
  close: boolean;
  className: string;
}

export const Chip = ({
  size,
  variant,
  avatar,
  close,
  className,
}: ChipProps): JSX.Element => {
  return (
    <div
      className={`chip ${size} ${variant} ${className} ${{ ...chipStyles }}`}
    >
      {close && avatar && <>🦸</>}

      <div
        className={`div size-0-${size} avatar-${avatar} close-${close} variant-0-${variant}`}
      >
        {!close && avatar && <>🦸</>}

        {size === 'x-small' && (close || !avatar) && <>x-small chip</>}

        {size === 'small' && (close || !avatar) && <>small chip</>}

        {size === 'default' && (close || !avatar) && <>default</>}
      </div>
      {close && avatar && <div className="text-wrapper">cancel</div>}

      {((avatar && !close) || (close && !avatar)) && (
        <div
          className={`span size-2-${size} close-0-${close} variant-2-${variant}`}
        >
          {size === 'x-small' && avatar && <>x-small chip</>}

          {close && <>cancel</>}

          {size === 'small' && !close && <>small chip</>}

          {size === 'default' && !close && <>default</>}
        </div>
      )}
    </div>
  );
};

export const ChipPropTypes = {
  size: PropTypes.oneOf(['default', 'x-small', 'small']),
  variant: PropTypes.oneOf(['primary', 'outlined', 'default']),
  avatar: PropTypes.bool,
  close: PropTypes.bool,
};

export default Chip;
