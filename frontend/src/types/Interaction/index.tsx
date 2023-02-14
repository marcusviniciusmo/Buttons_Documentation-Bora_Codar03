export interface InteracionMocks {
  classHover: string;
  classFocus: string;
  classNameInteraction: {
    id: string;
    class: string;
  }[];
  textDocMock: {
    className: string;
    header: string;
    text: string;
  };
  buttons: {
    id: string;
    className: string;
    label: string;
  }[];
};