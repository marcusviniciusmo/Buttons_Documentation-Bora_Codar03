import styled from "styled-components";

export const Container = styled.div`
  width: 3.3rem;
  height: 4.8rem;
  padding: 0.8rem 1.1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  cursor: pointer;

  &.disabled {
    width: 3.4;
    padding: 1rem;
  }

  &.loading {
    width: 3.5rem;
    padding: 0.1rem 0.8rem;
  }

  &.movable {
    padding: 0.9rem;
  }
`;

export const Group = styled.div`
  width: 1.1rem;
  height: 1.8rem;

  &.disabled {
    width: 1.4rem;
    height: 2.4rem;
  }

  &.loading {
    width: 1.9rem;
    height: 3.1rem;
  }

  &.movable {
    width: 1.5;
    height: 1.5;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 21.68%;
  right: 39.97%;
  bottom: 48.37%;
  left: 35.72%;

  &.disabled {
    top: -5%;
  }

  &.loading {
    top: -20%;
  }

  &.movable {
    top: 31.7%;
    right: 30.67%;
    bottom: 50.91%;
    left: 30.66%;
  }
`;

export const Pointer = styled.img`
  position: absolute;
  left: 25.71%;
  right: 22.86%;
  top: 30.42%;
  bottom: 32.08%;
`;

export const MaskGroup = styled.div`
  position: absolute;
  top: 80%;
  left: 20%;
`;

export const Mask = styled.img``;