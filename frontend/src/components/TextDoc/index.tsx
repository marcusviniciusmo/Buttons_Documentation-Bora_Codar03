import { TextDocProps } from "types/TextDoc";
import * as Styles from "./styles";

export function TextDoc(props: TextDocProps) {
  return (
    <Styles.Container className={props.className}>
      <Styles.Heading className={props.className}>
        <Styles.Header>{props.header}</Styles.Header>
      </Styles.Heading>

      <Styles.Content className={props.className}>
        <Styles.Texting className={props.className}>
          <Styles.Text>{props.text}</Styles.Text>
        </Styles.Texting>
      </Styles.Content>
    </Styles.Container>
  );
};