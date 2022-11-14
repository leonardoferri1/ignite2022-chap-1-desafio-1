import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--gray-700);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.5rem;
  position: relative;
`;

export const HeaderContent = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
  max-width: 46rem;
  display: flex;
  padding: 0;

  div {
    position: absolute;
    height: 3.375rem;
    bottom: calc(-3.375rem / 2);
    width: 100%;
    max-width: 46rem;
    display: flex;
    gap: 0.5rem;
    padding: 0 1rem;

    filter: drop-shadow(2.5px 2.5px 1px #000000);

    input {
      height: 100%;
      flex: 1;
      color: var(--gray-100);
      background: var(--gray-500);
      border: 1px solid var(--gray-700);
      border-radius: 0.5rem;
      padding: 0 1rem;
      font-size: 1rem;

      &::placeholder {
        color: var(--gray-300);
      }
    }
  }

  button {
    height: 100%;
    padding: 0 1rem;
    background: var(--blue-dark);
    color: var(--gray-100);
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-weight: 700;
    font-size: 0.875rem;

    &:disabled {
      filter: brightness(0.5);
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TaskCounterContainer = styled.header`
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const TaskCounterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  p {
    color: var(--blue);
    font-size: 0.875rem;
    font-weight: 700;
  }

  p.textPurple {
    color: var(--purple);
  }

  span {
    background: var(--gray-400);
    color: var(--gray-200);
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;
