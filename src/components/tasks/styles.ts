import styled from "styled-components";

export const TasksContainer = styled.div`
  width: 100%;
  max-width: 46rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 1rem;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Task = styled.div`
  width: 100%;
  background: var(--gray-500);
  border: 1px solid var(--gray-400);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  p {
    font-size: 0.875rem;
    line-height: 1.18rem;
    color: var(--gray-100);
    margin-right: auto;
  }

  p.textCompleted {
    color: var(--gray-300);
    text-decoration: line-through;
  }

  button.checkBox {
    width: 1.125rem;
    height: 1.125rem;
    background: none;
    border: none;

    div {
      width: 100%;
      height: 100%;
      border-radius: 999px;
      border: 2px solid var(--blue);
    }

    svg {
      width: 100%;
      height: 100%;
      color: var(--purple);
    }
  }

  button.delete {
    background: none;
    border: none;
    color: var(--gray-300);
  }
`;
