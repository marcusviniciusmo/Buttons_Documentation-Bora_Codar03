import { TextDoc } from "components/TextDoc";
import { Button } from "components/Button";
import { Container, Buttons } from "./styles";

export function Interaction() {
  return (
    <Container>
      <TextDoc
        className='interaction'
        header='Teste os botões'
        text={`Interaja com os botões e observe a mudança de aparência e de
          cursores`}
      />

      <Buttons>
        <Button
          className='interaction primary'
          label='Interaja Comigo'
          />
        <Button
          className='interaction secondary'
          label='Interaja Comigo'
          />
        <Button
          className='interaction tertiary'
          label='Interaja Comigo'
          />
      </Buttons>
    </Container>
  );
};