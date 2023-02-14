import { useEffect, useState } from "react";
import { TextDoc } from "components/TextDoc";
import { ViewDoc } from "components/ViewDoc";
import { Interaction } from "components/Interaction";
import { MockedData } from "mocks/Documentation";
import { DocumentationMocks } from "types/Documentation";
import { Container } from "./styles";

export function Documentation() {
  const [mockedData, setMockedData] = useState<DocumentationMocks>();

  useEffect(() => {
    setMockedData(MockedData)
  }, []);

  return (
    <Container>
      <TextDoc
        className={mockedData?.className}
        header={mockedData!?.header}
        text={mockedData!?.text}
      />

      <ViewDoc />

      <Interaction />
    </Container>
  );
};