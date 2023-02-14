import { useEffect, useState } from 'react';
import IconLoading from 'assets/iconLoading.png';
import IconMovable from 'assets/iconMovable.png';
import { TextDoc } from "components/TextDoc";
import { Button } from "components/Button";
import { MockedData } from 'mocks/Interaction';
import { InteracionMocks } from 'types/Interaction';
import { Container, Buttons } from "./styles";

export function Interaction() {
  const [mockedData, setMockedData] = useState<InteracionMocks>();
  const [showIconLoading, setShowIconLoading] = useState<boolean>(false);
  const [showIconMovable, setShowIconMovable] = useState<boolean>(false);

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  const toggleHover = (id: string) => {
    const btn = document.getElementById(id);
    btn?.classList.toggle(`${id}${mockedData?.classHover}`);
  };

  const toggleClassFocus = (id: string) => {
    const btn = document.getElementById(id);
    btn?.classList.toggle(mockedData!?.classFocus);

    if (id === mockedData?.classNameInteraction[0].id) {
      btn?.classList.toggle(mockedData.classNameInteraction[0].class);
    } else if (id === mockedData?.classNameInteraction[1].id) {
      btn?.classList.toggle(mockedData.classNameInteraction[1].class);
      setShowIconLoading(!showIconLoading);
    } else if (mockedData?.classNameInteraction[2].id) {
      btn?.classList.toggle(mockedData.classNameInteraction[2].class);
      setShowIconMovable(!showIconMovable);
    };
  };

  return (
    <Container>
      <TextDoc
        className={mockedData?.textDocMock.className}
        header={mockedData!?.textDocMock.header}
        text={mockedData!?.textDocMock.text}
      />

      <Buttons>
        <Button
          id={mockedData?.buttons[0].id}
          className={mockedData?.buttons[0].className}
          label={mockedData?.buttons[0].label}
          onMouseEnter={() => toggleHover(mockedData!?.buttons[0].id)}
          onMouseLeave={() => toggleHover(mockedData!?.buttons[0].id)}
          onClick={() => toggleClassFocus(mockedData!?.buttons[0].id)}
        />

        <Button
          id={mockedData?.buttons[1].id}
          className={mockedData?.buttons[1].className}
          label={mockedData?.buttons[1].label}
          icon={showIconLoading ? IconLoading : ''}
          onMouseEnter={() => toggleHover(mockedData!?.buttons[1].id)}
          onMouseLeave={() => toggleHover(mockedData!?.buttons[1].id)}
          onClick={() => toggleClassFocus(mockedData!?.buttons[1].id)}
        />

        <Button
          id={mockedData?.buttons[2].id}
          className={mockedData?.buttons[2].className}
          label={mockedData?.buttons[2].label}
          onMouseEnter={() => toggleHover(mockedData!?.buttons[2].id)}
          onMouseLeave={() => toggleHover(mockedData!?.buttons[2].id)}
          onClick={() => toggleClassFocus(mockedData!?.buttons[2].id)}
          icon={showIconMovable ? IconMovable : ''}
        />
      </Buttons>
    </Container>
  );
};