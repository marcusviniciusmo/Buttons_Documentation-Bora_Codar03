import { useEffect, useState } from 'react';
import { ViewBar } from "components/ViewBar";
import { Button } from "components/Button";
import { Cursor } from "components/Cursor";
import { MockedData } from 'mocks/ViewDoc';
import { ViewDocMocks } from 'types/ViewDoc';
import { Container, View, Content, ViewButtons, Col } from "./styles";

export function ViewDoc() {
  const [mockedData, setMockedData] = useState<ViewDocMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <ViewBar className={mockedData?.horizontalClassName} />

      <View>
        <Content>
          <ViewBar className={mockedData?.verticalClassName} />

          <ViewButtons>
            <Col width={mockedData!?.documentation.primary.width}>
              {
                mockedData?.documentation.primary.buttons.map((p) => {
                  return (
                    <Button
                      className={p.className}
                      label={p.label}
                      icon={p.icon}
                    />
                  )
                })
              }
            </Col>

            <Col width={mockedData!?.documentation.secondary.width}>
              {
                mockedData?.documentation.secondary.buttons.map((s) => {
                  return (
                    <Button
                      className={s.className}
                      label={s.label}
                      icon={s.icon}
                    />
                  )
                })
              }
            </Col>

            <Col width={mockedData!?.documentation.tertiary.width}>
              {
                mockedData?.documentation.tertiary.buttons.map((t) => {
                  return (
                    <Button
                      className={t.className}
                      label={t.label}
                      icon={t.icon}
                    />
                  )
                })
              }
            </Col>

            <Col width={mockedData!?.documentation.cursors.width}>
              {
                mockedData?.documentation.cursors.cursors.map((c) => {
                  return (
                    <Cursor
                      className={c.className}
                      pointer={c.pointer}
                      mask={c.mask}
                    />
                  )
                })
              }
            </Col>
          </ViewButtons>
        </Content>
      </View>
    </Container>
  );
};