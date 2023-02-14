export interface ViewBarColProps {
  width: string;
};

export interface ViewBarMocks {
  horizontal: {
    width: string;
    label: string;
  }[];
  vertical: {
    label: string;
  }[];
};

export interface ViewBarProps extends React.HTMLProps<any> {};