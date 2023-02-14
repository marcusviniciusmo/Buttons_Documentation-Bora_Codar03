import { ViewDocMocks } from "types/ViewDoc";
import IconLoading from 'assets/iconLoading.png';
import IconMovable from 'assets/iconMovable.png';
import CursorDefault from 'assets/cursorDefault.png';
import CursorHover from 'assets/cursorHover.png';
import CursorFocus from 'assets/cursorFocus.png';
import CursorDisabled from 'assets/cursorDisabled.png';
import CursorLoading from 'assets/cursorLoading.png';
import CursorMovable from 'assets/cursorMovable.png';
import MaskCursor from 'assets/maskCursor.png';

export const MockedData: ViewDocMocks = {
  horizontalClassName: 'horizontalBar',
  verticalClassName: 'verticalBar',
  documentation: {
    primary: {
      width: '21.3',
      buttons: [
        {
          className: 'default primary',
          label: 'Default Primary',
        },
        {
          className: 'hover primary',
          label: 'Hover Primary',
        },
        {
          className: 'focus primary',
          label: 'Focus Primary',
        },
        {
          className: 'disabled primary',
          label: 'Disabled Primary',
        },
        {
          className: 'loading primary',
          label: 'Loading Primary',
          icon: IconLoading
        },
        {
          className: 'movable primary',
          label: 'Movable Primary',
          icon: IconMovable
        }
      ]
    },
    secondary: {
      width: '23.8',
      buttons: [
        {
          className: 'default secondary',
          label: 'Default Secondary',
        },
        {
          className: 'hover secondary',
          label: 'Hover Secondary',
        },
        {
          className: 'focus secondary',
          label: 'Focus Secondary',
        },
        {
          className: 'disabled secondary',
          label: 'Disabled Secondary',
        },
        {
          className: 'loading secondary',
          label: 'Loading Secondary',
          icon: IconLoading
        },
        {
          className: 'movable secondary',
          label: 'Movable Secondary',
          icon: IconMovable
        }
      ]
    },
    tertiary: {
      width: '21.9',
      buttons: [
        {
          className: 'default tertiary',
          label: 'Default Tertiary',
        },
        {
          className: 'hover tertiary',
          label: 'Hover Tertiary',
        },
        {
          className: 'focus tertiary',
          label: 'Focus Tertiary',
        },
        {
          className: 'disabled tertiary',
          label: 'Disabled Tertiary',
        },
        {
          className: 'loading tertiary',
          label: 'Loading Tertiary',
          icon: IconLoading
        },
        {
          className: 'movable tertiary',
          label: 'Movable Tertiary',
          icon: IconMovable
        }
      ]
    },
    cursors: {
      width: '4.8',
      cursors: [
        {
          className: 'default',
          pointer: CursorDefault,
        },
        {
          className: 'hover',
          pointer: CursorHover,
        },
        {
          className: 'focus',
          pointer: CursorFocus,
        },
        {
          className: 'disabled',
          pointer: CursorDisabled,
        },
        {
          className: 'loading',
          pointer: CursorLoading,
          mask: MaskCursor
        },
        {
          className: 'movable',
          pointer: CursorMovable
        }
      ]
    },
  }
};