import { CursorProps } from "types/Cursor";
import { Container, Group, Content, MaskGroup, Mask, Pointer } from "./styles";

export function Cursor(props: CursorProps) {
  const handleCursor = (className: string) => {
    switch (className) {
      case 'default':
        document.body.style.cursor = 'default';
        break;
      case 'hover':
        document.body.style.cursor = 'pointer';
        break;
      case 'focus':
        document.body.style.cursor = 'default';
        break;
      case 'disabled':
        document.body.style.cursor = 'not-allowed';
        break;
      case 'loading':
        document.body.style.cursor = 'wait';
        break;
      case 'movable':
        document.body.style.cursor = 'move';
        break;
    };
  };

  return (
    <Container
      className={props.className}
      onClick={() => handleCursor(props.className!)}
    >
      <Group className={props.className} title='Click me!'>
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