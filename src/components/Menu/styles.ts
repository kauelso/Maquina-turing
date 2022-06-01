import styled from 'styled-components';

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
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
  p {
    font-family: 'Segoe UI';
    font-weight: bold;
    font-size: 1.5rem;
  }
  span {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
export const ButtonWrapper = styled.button`
  position: relative;
  background-color: #fb8da0;
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
