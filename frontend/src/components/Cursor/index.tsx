import { useEffect, useState } from "react";
import { MockedData } from "mocks/Cursor";
import { CursorProps, CursorMocks } from "types/Cursor";
import { Container, Group, Content, MaskGroup, Mask, Pointer } from "./styles";

export function Cursor(props: CursorProps) {
  const [mockedData, setMockedData] = useState<CursorMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  const handleCursor = (className: string) => {
    switch (className) {
      case mockedData?.handleCursor[0].className:
        document.body.style.cursor = mockedData!?.handleCursor[0].cursor;
        break;
      case mockedData?.handleCursor[1].className:
        document.body.style.cursor = mockedData!?.handleCursor[1].cursor;
        break;
      case mockedData?.handleCursor[2].className:
        document.body.style.cursor = mockedData!?.handleCursor[2].cursor;
        break;
      case mockedData?.handleCursor[3].className:
        document.body.style.cursor = mockedData!?.handleCursor[3].cursor;
        break;
      case mockedData?.handleCursor[4].className:
        document.body.style.cursor = mockedData!?.handleCursor[4].cursor;
        break;
      case mockedData?.handleCursor[5].className:
        document.body.style.cursor = mockedData!?.handleCursor[5].cursor;
        break;
    };
  };

  return (
    <Container
      className={props.className}
      onClick={() => handleCursor(props.className!)}
    >
      <Group className={props.className} title={mockedData?.title}>
        <Content className={props.className}>
          {
            props.className === 'loading'
              ? <>
                <Pointer src={props.pointer} />
                <MaskGroup>
                  <Mask src={props.mask} />
                </MaskGroup>
              </>
              : <Pointer src={props.pointer} />
          }
        </Content>
      </Group>
    </Container>
  );
};