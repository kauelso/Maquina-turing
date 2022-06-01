import styled from 'styled-components';

export const WrapperHeader = styled.header`
  display: flex;
  flex-direction: column;

  padding: 1.2rem 1.5rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: #111111;
  background-color: #fb4570;

  @media (max-width: 576px) {
    width: 100vw;
  }

  & > div:first-child {
    display: flex;
    align-items: center;

    h1 {
      font-size: 3rem;
      font-weight: 500;
      color: #efebe0;
    }
  }
`;
