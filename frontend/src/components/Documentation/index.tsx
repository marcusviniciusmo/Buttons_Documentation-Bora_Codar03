import { TextDoc } from "components/TextDoc";
import { ViewDoc } from "components/ViewDoc";
import { Interaction } from "components/Interaction";

export function Documentation() {
  return (
    <>
      <h1>DOCUMENTATION Component</h1>

      <TextDoc />

      <ViewDoc />

      <Interaction />
    </>
  );
};