import { TextDoc } from "components/TextDoc";
import { ViewDoc } from "components/ViewDoc";
import { Interaction } from "components/Interaction";
import { Container } from "./styles";

export function Documentation() {
  return (
    <Container>
      <TextDoc />

      <ViewDoc />

      <Interaction />
    </Container>
  );
};