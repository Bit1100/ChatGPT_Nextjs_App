import styled, { css } from "styled-components";
import { flex } from "@/styles/UtilityStyles.tsx";
import { BaseTriangle } from "@/styles/GlobalStyles";

export const Banner = styled.div`
  ${flex("center", "center", "column")};
  margin: 2rem auto;
  margin-top: 8rem;
  margin-left: 0.5rem;
  padding: 3rem 3rem 0 3rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.deepBlue};
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.xl} {
    margin: 1rem auto;
    margin-top: 5rem;
    padding: 0;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 95%;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    margin-top: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem 1rem 0 1rem;
  }
`;

export const Title = styled.h2`
  letter-spacing: 0.15rem;
  font-size: 4rem;
  line-height: 4rem;
  font-weight: 600;
  margin: 2rem;
  text-align: center;
  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 3.5rem;
    letter-spacing: 0.05rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 2.5rem;
  }
`;

export const Menu = styled.div`
  ${flex()};
  flex-wrap: wrap;
  margin: 2rem;
  margin-bottom: 0;
  border: 2px soiid red;
  @media ${({ theme }) => theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 1rem;
    margin: 0.6rem;
  }
`;

export const MenuItem = styled.div`
  ${flex("center", "center", "column")};
  margin: 0 1rem;
  cursor: pointer;
  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 0 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 0 0.2rem;
  }
`;

export const Icon = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.2rem;
  /* font-size: 3rem; */
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
`;

export const Category = styled.div`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const Triangle = styled(BaseTriangle)`
  ${({ active }) =>
    active &&
    css`
      visibility: visible;
    `}
  @media ${({ theme }) => theme.breakpoints.md} {
    visibility: hidden;
  }
`;
