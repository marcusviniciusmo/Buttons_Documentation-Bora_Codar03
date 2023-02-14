export interface ViewDocColProps {
  width: string;
};

export interface ViewDocMocks {
  horizontalClassName: string;
  verticalClassName: string;
  documentation: {
    primary: {
      width: string;
      buttons: {
        className: string;
        label: string;
        icon?: string;
      }[];
    },
    secondary: {
      width: string;
      buttons: {
        className: string;
        label: string;
        icon?: string;
      }[];
    },
    tertiary: {
      width: string;
      buttons: {
        className: string;
        label: string;
        icon?: string;
      }[];
    },
    cursors: {
      width: string;
      cursors: {
        className: string;
        pointer: string;
        mask?: string;
      }[];
    };
  };
};