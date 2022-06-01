import styled from 'styled-components';

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1.2rem 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: #111111;
  background-color: #fb4570;
  font-family: 'Segoe UI';
  h4 {
    font-size: 2rem;
  }
`;
export const ButtonWrapper = styled.button`
  position: relative;
  background-color: #fb4570;
  border-radius: 4px;
  margin-bottom: 3px;
  font-size: 1rem;
  color: #ffffff;
  padding: 0.5rem;
  width: 6rem;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
`;

export const WrapperMachine = styled.div`
  display: flex;
  flex-direction: column;
  background: #fb8da0;
  border-radius: 4px;
  padding: 0.5rem;
`;
export const WrapperDescription = styled.div``;

export const WrapperFita = styled.div`
  background: #efebe0;
  font-size: 1rem;
  width: 100%;
  border: 10px;
  border-color: #fb8da0;
  height: 2rem;
  border-radius: 2px;
`;
