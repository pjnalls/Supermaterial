import * as buttonStyles from './button.module.scss';
import PropTypes from 'prop-types';
import { useReducer } from 'react';

export interface ButtonProps {
  variant: 'text' | 'outlined' | 'fab-extended' | 'contained';
  disabled: boolean;
  size: 'large' | 'medium' | 'small';
  hover: boolean;
  iconLeft: boolean;
  iconRight: boolean;
  key: string;
  className: string;
}

export const Button = ({
  variant,
  disabled,
  size,
  hover,
  iconLeft,
  iconRight,
  key,
  className,
}: ButtonProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || 'text',
    disabled: disabled,

    size: size || 'small',
    hover: hover,

    iconLeft: iconLeft,

    iconRight: iconRight,
    key: key,
    className: className,
  });

  return (
    <div
      className={`button ${state.variant} ${state.size} hover-${
        state.hover
      } disabled-${state.disabled} ${className} ${{ ...buttonStyles }}`}
      onMouseEnter={() => {
        dispatch('mouse_enter');
      }}
      onMouseLeave={() => {
        dispatch('mouse_leave');
      }}
    >
      <div className="content">
        <div
          className={`icon-left icon-left-${state.iconLeft} disabled-0-${state.disabled} size-${state.size} variant-${state.variant}`}
        >
          {state.iconLeft && <>edit</>}

          {!state.iconLeft &&
            ['contained', 'fab-extended'].includes(state.variant) && (
              <>CONTAINED</>
            )}

          {!state.iconLeft && state.variant === 'text' && <>TEXT</>}

          {!state.iconLeft && state.variant === 'outlined' && <>OUTLINED</>}
        </div>
        {(state.iconLeft || state.iconRight) && (
          <div
            className={`div disabled-1-${state.disabled} icon-left-0-${state.iconLeft} size-0-${state.size} variant-0-${state.variant} icon-right-${state.iconRight}`}
          >
            {state.iconLeft &&
              ['contained', 'fab-extended'].includes(state.variant) && (
                <>CONTAINED</>
              )}

            {state.iconRight && <>cancel</>}

            {state.variant === 'text' && !state.iconRight && <>TEXT</>}

            {state.variant === 'outlined' && !state.iconRight && <>OUTLINED</>}
          </div>
        )}
      </div>
    </div>
  );
};

function reducer(state: ButtonProps, action: string) {
  switch (action) {
    case 'mouse_enter':
      return {
        ...state,
        hover: true,
      };

    case 'mouse_leave':
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}

export const ButtonPropTypes = {
  variant: PropTypes.oneOf(['text', 'outlined', 'fab-extended', 'contained']),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  hover: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
};
