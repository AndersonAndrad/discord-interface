import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;

  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* color */
  background-color: var(--tertiary);

  /* spaces */
  padding: 11px 0px;
  max-height: 100vh;

  /* scroll */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  /* spacing */
  width: 32px;
  border-bottom: 2px solid var(--quaternary);
  margin-bottom: 8px;
`;
