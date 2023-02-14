import { CursorMocks } from "types/Cursor";

export const MockedData: CursorMocks = {
  handleCursor: [
    {
      className: 'default',
      cursor: 'default'
    },
    {
      className: 'hover',
      cursor: 'pointer'
    },
    {
      className: 'focus',
      cursor: 'default'
    },
    {
      className: 'disabled',
      cursor: 'not-allowed'
    },
    {
      className: 'loading',
      cursor: 'wait'
    },
    {
      className: 'movable',
      cursor: 'move'
    },
  ],
  title: 'Click me!'
};