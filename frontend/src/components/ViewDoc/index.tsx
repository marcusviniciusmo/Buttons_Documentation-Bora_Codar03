import { ViewBar } from "components/ViewBar";
import { Button } from "components/Button";
import { Cursor } from "components/Cursor";
import { Container, View, Content, ViewButtons, Col } from "./styles";

export function ViewDoc() {
  return (
    <Container>
      <ViewBar className='horizontalBar' />

      <View>
        <Content>
          <ViewBar className='verticalBar' />

          <ViewButtons>
            <Col width='21.3'>
              <Button />
              <Button />
              <Button />
              <Button />
              <Button />
              <Button />
            </Col>

            <Col width='23.8'>
              <Button />
              <Button />
              <Button />
              <Button />
              <Button />
              <Button />
            </Col>

            <Col width='21.9'>
              <Button />
              <Button />
              <Button />
              <Button />
              <Button />
              <Button />
            </Col>

            <Col width='4.8'>
              <Cursor />
              <Cursor />
              <Cursor />
              <Cursor />
              <Cursor />
              <Cursor />
            </Col>
          </ViewButtons>
        </Content>
      </View>
    </Container>
  );
};