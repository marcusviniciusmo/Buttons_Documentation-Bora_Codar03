import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  position: absolute;
  top: 10.7rem;

  &.documentation {
    width: 80.8rem;
    height: 11.8rem;
    padding: 0rem 0rem 3.2rem;
    left: 7.7rem;
    box-sizing: border-box;
  }

  &.interaction {
    width: 31.8rem;
    height: 8.6rem;
    padding: 0rem;
    left: 4.4rem;
  }
`;

export const Heading = styled.div`
  height: 3.2rem;
  padding: 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &.documentation {
    width: 23.3rem;
  }

  &.interaction {
    width: 24.9rem;
  }
`;

export const Header = styled.span`
  font-family: 'Inter';
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 100%;
`;

export const Content = styled.div`
  height: 4.6rem;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;

  &.documentation {
    width: 80.8rem;
  }

  &.interaction {
    width: 31.8rem;
  }
`;

export const Texting = styled.div`
  height: 4.6rem;
  padding: 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-self: stretch;
  opacity: 0.6;

  &.documentation{
    width: 80.8rem;
  }

  &.interaction{
    width: 31.8rem;
  }
`;

export const Text = styled.span`
  font-family: 'Roboto';
  font-size: 1.9rem;
  font-weight: 400;
  line-height: 2.3rem;
`;