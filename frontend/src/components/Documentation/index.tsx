import { TextDoc } from "components/TextDoc";
import { ViewDoc } from "components/ViewDoc";
import { Interaction } from "components/Interaction";
import { Container } from "./styles";

export function Documentation() {
  return (
    <Container>
      <TextDoc
        className='documentation'
        header='Tipos de botão'
        text={`Dentro de um layout, botões servem para destacar ações
          importantes a serem tomadas. Acompanhe abaixo um exemplo de tipos e
          propriedades.`}
      />

      <ViewDoc />

      <Interaction />
    </Container>
  );
};