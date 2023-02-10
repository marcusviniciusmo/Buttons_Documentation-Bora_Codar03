import styled from "styled-components";

export const Container = styled.div`
  height: 4.8rem;
  padding: 1.2rem 2.4rem;
  border-radius: 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  box-sizing: border-box;

  &.primary {
    background: var(--background-button-primary);

    &.default {
      width: 17.6rem;
    }

    &.hover {
      background: var(--background-button-primary-hover);
      width: 16.2rem;
    }

    &.focus {
      width: 16.7rem;
    }

    &.disabled {
      width: 18.3rem;
    }

    &.loading {
      width: 20.1rem;
    }

    &.movable {
      width: 21.3rem;
    }
  }

  &.secondary {
    background: var(--background-button-secondary);

    &.default {
      width: 20rem;
    }

    &.hover {
      background: var(--background-button-secondary-hover);
      width: 18.7rem;
    }

    &.focus {
      width: 19.1rem;
    }

    &.disabled {
      width: 20.7rem;
    }

    &.loading {
      width: 22.5rem;
    }

    &.movable {
      width: 23.8rem;
    }
  }

  &.tertiary {
    &.default {
      width: 18.1rem;
    }

    &.hover {
      width: 16.8rem;
    }

    &.focus {
      width: 17.2rem;
    }

    &.disabled {
      width: 18.8rem;
    }

    &.loading {
      width: 20.6rem;
    }

    &.movable {
      width: 21.9rem;
    }
  }

  &.focus {
    border: 0.2rem solid var(--border-button-focus);
  }

  &.disabled {
    opacity: 0.6;
  }

  &.interaction {
    width: 31.7rem;
  }
`;

export const Label = styled.span`
  font-family: 'Inter';
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;