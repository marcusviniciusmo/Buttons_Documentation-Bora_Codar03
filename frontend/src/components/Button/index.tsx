import { ButtonProps } from "types/Button";
import { Container, Icon, Label } from "./styles";

export function Button(props: ButtonProps) {
  return (
    <Container
      id={props.id}
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onClick={props.onClick}
    >
      {
        props.icon &&
        <Icon src={props.icon} />
      }
      <Label>{props.label}</Label>
    </Container>
  );
};