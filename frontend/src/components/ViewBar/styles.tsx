import styled from "styled-components";
import { ViewBarColProps } from "types/ViewBar";

export const Container = styled.div`
  background: var(--background-viewBar);
  display: flex;
  align-items: center;
  gap: 3.2rem;
  box-sizing: border-box;

  &.horizontalBar {
    width: 86.5rem;
    height: 6.4rem;
    padding: 2.4rem 1.6rem;
    flex-direction: row;
  }

  &.verticalBar {
    width: 9.4rem;
    height: 51.2rem;
    padding: 3.2rem 0rem;
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 9.4rem;
  height: 48.8rem;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 3.2rem;
`;

export const Col = styled.div<ViewBarColProps>`
  width: ${(props) => props.width}rem;
  height: 3.3rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Row = styled.div`
  width: 9.4rem;
  height: 4.8rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  gap: 1rem;
  box-sizing: border-box;
`;

export const Label = styled.span`
  font-family: 'Roboto';
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3rem;
  text-align: center;
  text-transform: uppercase;
`;