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
              <Button
                className='default primary'
                label='Default Primary'
              />

              <Button
                className='hover primary'
                label='Hover Primary'
              />

              <Button
                className='focus primary'
                label='Focus Primary'
              />

              <Button
                className='disabled primary'
                label='Disabled Primary'
              />

              <Button
                className='loading primary'
                label='Loading Primary'
              />

              <Button
                className='movable primary'
                label='Movable Primary'
              />
            </Col>

            <Col width='23.8'>
              <Button
                className='default secondary'
                label='Default Secondary'
              />

              <Button
                className='hover secondary'
                label='Hover Secondary'
              />

              <Button
                className='focus secondary'
                label='Focus Secondary'
              />

              <Button
                className='disabled secondary'
                label='Disabled Secondary'
              />

              <Button
                className='loading secondary'
                label='Loading Secondary'
              />

              <Button
                className='movable secondary'
                label='Movable Secondary'
              />
            </Col>

            <Col width='21.9'>
              <Button
                className='default tertiary'
                label='Default Tertiary'
              />

              <Button
                className='hover tertiary'
                label='Hover Tertiary'
              />

              <Button
                className='focus tertiary'
                label='Focus Tertiary'
              />

              <Button
                className='disabled tertiary'
                label='Disabled Tertiary'
              />

              <Button
                className='loading tertiary'
                label='Loading Tertiary'
              />

              <Button
                className='movable tertiary'
                label='Movable Tertiary'
              />
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