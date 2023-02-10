import { TextDoc } from "components/TextDoc";
import { Button } from "components/Button";
import { Container } from "./styles";

export function Interaction() {
  return (
    <Container>
      <TextDoc
        className='interaction'
        header='Teste os botões'
        text={`Interaja com os botões e observe a mudança de aparência e de
          cursores`}
      />

      <Button />
      <Button />
      <Button />
    </Container>
  );
};