import CursorDefault from 'assets/cursorDefault.png';
import CursorHover from 'assets/cursorHover.png';
import CursorFocus from 'assets/cursorFocus.png';
import CursorDisabled from 'assets/cursorDisabled.png';
import CursorLoading from 'assets/cursorLoading.png';
import CursorMovable from 'assets/cursorMovable.png';
import MaskCursor from 'assets/maskCursor.png';
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
              <Cursor className='default' pointer={CursorDefault} />
              <Cursor className='hover' pointer={CursorHover} />
              <Cursor className='focus' pointer={CursorFocus} />
              <Cursor className='disabled' pointer={CursorDisabled} />
              <Cursor className='loading' pointer={CursorLoading} mask={MaskCursor} />
              <Cursor className='movable' pointer={CursorMovable} />
            </Col>
          </ViewButtons>
        </Content>
      </View>
    </Container>
  );
};