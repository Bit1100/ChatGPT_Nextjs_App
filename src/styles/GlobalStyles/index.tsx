import styled from "styled-components";

export const Container = styled.main`
  min-height: 90vh;
  /* height: 100vh; */
  width: calc(100vw - 8rem);
  margin-left: auto;
  display: grid;
  place-items: center;
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 100vw;
    nargin: 0 auto;
  }
`;

export const Section = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 90%;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 95%;
  }
`;

export const BaseTriangle = styled.div`
  margin-top: 1rem;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 1.2rem 1.2rem 1.2rem;
  border-color: transparent transparent ${({ theme }) => theme.colors.white}
    transparent;
  visibility: hidden;
  &:hover {
    visibility: visible;
  }
`;
