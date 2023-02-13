import { CursorProps } from "types/Cursor";
import { Container, Group, Content, MaskGroup, Mask, Pointer } from "./styles";

export function Cursor(props: CursorProps) {
  return (
    <Container className={props.className}>
      <Group className={props.className}>
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