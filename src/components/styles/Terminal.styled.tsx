import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.25rem;
  padding-top: 0.75rem;
  display: flex;
  flex-direction: column-reverse;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  position: relative;
`;

export const CmdNotFound = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

export const Empty = styled.div`
  margin-bottom: 0.25rem;
`;

export const MobileSpan = styled.span`
  line-height: 1.5rem;
  margin-right: 0.75rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const MobileBr = styled.br`
  @media (min-width: 550px) {
    display: none;
  }
`;

export const Form = styled.form`
  @media (min-width: 550px) {
    display: flex;
  }
  position: sticky;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 0.5rem;
  z-index: 10;
`;

export const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  margin: 0;

  @media (max-width: 550px) {
    min-width: 85%;
  }
`;

export const Hints = styled.span`
  margin-right: 0.875rem;
`;
