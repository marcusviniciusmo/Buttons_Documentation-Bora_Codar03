export interface CursorMocks {
  handleCursor: {
    className: string;
    cursor: string;
  }[];
  title: string;
};

export interface CursorProps extends React.HTMLProps<any> {
  pointer: string;
  mask?: string;
};