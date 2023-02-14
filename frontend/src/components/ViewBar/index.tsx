import { ViewBarProps } from 'types/ViewBar';
import * as Styles from './styles';

export function ViewBar(props: ViewBarProps) {
  return (
    <Styles.Container className={props.className}>
      {
        props.className === 'horizontalBar'
          ? <>
            <Styles.Col width='21.3'>
              <Styles.Label>Botão Primário</Styles.Label>
            </Styles.Col>
            <Styles.Col width='23.8'>
              <Styles.Label>Botão Secundário</Styles.Label>
            </Styles.Col>
            <Styles.Col width='21.9'>
              <Styles.Label>Botão Terciário</Styles.Label>
            </Styles.Col>
            <Styles.Col width='4.8'>
              <Styles.Label>Cursor</Styles.Label>
            </Styles.Col>
          </>
          : <Styles.Sidebar>
            <Styles.Row>
              <Styles.Label>Default</Styles.Label>
            </Styles.Row>
            <Styles.Row>
              <Styles.Label>Hover</Styles.Label>
            </Styles.Row>
            <Styles.Row>
              <Styles.Label>Focus</Styles.Label>
            </Styles.Row>
            <Styles.Row>
              <Styles.Label>Disabled</Styles.Label>
            </Styles.Row>
            <Styles.Row>
              <Styles.Label>Loading</Styles.Label>
            </Styles.Row>
            <Styles.Row>
              <Styles.Label>Movable</Styles.Label>
            </Styles.Row>
          </Styles.Sidebar>
      }
    </Styles.Container>
  );
};