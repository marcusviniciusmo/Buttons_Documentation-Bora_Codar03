import { ButtonProps } from "types/Buttons";
import { Container, Label } from "./styles";

export function Button(props: ButtonProps) {
  return (
    <Container className={props.className}>
      <Label>{props.label}</Label>
    </Container>
  );
};