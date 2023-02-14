import IconLoading from 'assets/iconLoading.png';
import IconMovable from 'assets/iconMovable.png';
import { TextDoc } from "components/TextDoc";
import { Button } from "components/Button";
import { Container, Buttons } from "./styles";
import { useState } from 'react';

export function Interaction() {
  const [showIconLoading, setShowIconLoading] = useState<boolean>(false);
  const [showIconMovable, setShowIconMovable] = useState<boolean>(false);

  const toggleClassHover = (id: string) => {
    const btn = document.getElementById(id);
    btn?.classList.toggle(`${id}Hover`);
  };

  const toggleClassFocus = (id: string) => {
    const btn = document.getElementById(id);
    btn?.classList.toggle('interactionFocus');

    if (id === 'interactionPrimary') {
      btn?.classList.toggle('interactionDisabled');
    } else if (id === 'interactionSecondary') {
      btn?.classList.toggle('interactionLoading');
      setShowIconLoading(!showIconLoading);
    } else {
      btn?.classList.toggle('interactionMovable');
      setShowIconMovable(!showIconMovable);
    };
  };

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
          id='interactionPrimary'
          className='interaction primary'
          label='Interaja Comigo'
          onMouseEnter={() => toggleClassHover('interactionPrimary')}
          onMouseLeave={() => toggleClassHover('interactionPrimary')}
          onClick={() => toggleClassFocus('interactionPrimary')}
        />

        <Button
          id='interactionSecondary'
          className='interaction secondary'
          label='Interaja Comigo'
          icon={showIconLoading ? IconLoading : ''}
          onMouseEnter={() => toggleClassHover('interactionSecondary')}
          onMouseLeave={() => toggleClassHover('interactionSecondary')}
          onClick={() => toggleClassFocus('interactionSecondary')}
        />

        <Button
          id='interactionTertiary'
          className='interaction tertiary'
          label='Interaja Comigo'
          icon={showIconMovable ? IconMovable : ''}
          onMouseEnter={() => toggleClassHover('interactionTertiary')}
          onMouseLeave={() => toggleClassHover('interactionTertiary')}
          onClick={() => toggleClassFocus('interactionTertiary')}
        />
      </Buttons>
    </Container>
  );
};