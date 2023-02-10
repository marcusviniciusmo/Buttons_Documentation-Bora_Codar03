import styled from "styled-components";
import { ViewDocColProps } from "types/ViewDoc";

export const Container = styled.div`
  background: var(--background-documentation);
  width: 95.8rem;
  height: 57.6rem;
  padding: 0rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 26.1rem;
  left: 7.7rem;
  box-sizing: border-box;
`;

export const View = styled.div`
  width: 95.8rem;
  height: 51.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Content = styled.div`
  width: 95.8rem;
  height: 51.2rem;
  border-radius: 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ViewButtons = styled.div`
  background: var(--background);
  width: 86.4rem;
  height: 51.2rem;
  padding: 3.2rem;
  border-width: 0rem 0.6rem 0.7rem 0rem;
  border-style: solid;
  border-color: var(--border-viewDoc);
  border-radius: 0rem 0rem 0.8rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3.2rem;
  box-sizing: border-box;
`;

export const Col = styled.div<ViewDocColProps>`
  width: ${(props) => props.width}rem;
  height: 44.8rem;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;