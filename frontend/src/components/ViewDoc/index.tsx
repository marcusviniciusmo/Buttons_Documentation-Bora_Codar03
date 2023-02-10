import { ViewBar } from "components/ViewBar";
import { Button } from "components/Button";
import { Cursor } from "components/Cursor";
import { Container, View, Content } from "./styles";

export function ViewDoc() {
  return (
    <Container>
      <ViewBar />

      <View>
        <Content>
          <ViewBar />

          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />

          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />

          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />

          <Cursor />
          <Cursor />
          <Cursor />
          <Cursor />
          <Cursor />
          <Cursor />
        </Content>
      </View>
    </Container>
  );
};