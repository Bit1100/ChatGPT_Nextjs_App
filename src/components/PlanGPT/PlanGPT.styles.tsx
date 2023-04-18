import { Section } from "@/styles/GlobalStyles";
import { display, flex } from "@/styles/UtilityStyles.tsx";
import styled from "styled-components";

export const PlanSection = styled(Section)`
  ${flex()};
  min-height: 90vh;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin-top: 5rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 90%;
  }
`;

export const Cards = styled.div`
  ${flex()};
  flex-wrap: wrap;
  gap: 2rem;
  @media ${({ theme }) => theme.breakpoints.xl} {
    gap: 0.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    gap: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    gap: 1rem;
  }
`;

export const Card = styled.div`
  ${flex("", "", "column")};
  width: 32rem;
  position: relative;
  gap: 0;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 1px 1px 3px 3px ${({ theme }) => theme.colors.gray400};
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 30rem;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 1rem 0;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 30rem;
  }
`;

export const Featured = styled.span`
  position: absolute;
  top: 2rem;
  left: -3rem;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  padding: 1rem 4rem;
  transform: rotate(-45deg);
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 0.5rem;
  border-top-left-radius: 2.5rem;
  border-bottom-left-radius: 0.5rem;
  ${display("none")};

  ${({ featured }) => (featured ? display("block") : display("nnne"))}
`;

export const CardTop = styled.div`
  flex: 1;
  padding-top: 2rem;
  ${flex("center", "center", "column")}
`;

export const CardBottom = styled.div`
  padding: 2rem;
  flex: 1;
  ${flex("start", "center", "column")};
  background-color: ${({ theme }) => theme.colors.lightSuccess};
`;

export const Heading = styled.h2`
  font-size: 3rem;
  line-height: 2rem;
  margin: 2rem 0;
`;

export const PriceWrapper = styled.div`
  ${flex()};
  gap: 0.2rem;
  padding: 0.5rem 0;
  /* background-color: ${({ theme }) => theme.colors.gray600}; */
`;

export const Price = styled.span`
  font-size: 3rem;
  font-weight: bold;
  text-decoration: line-through;
`;

export const Wrapper = styled.div`
  ${flex("start", "start", "column")};
  gap: 0.8rem;
  margin: 1rem 0;
`;

export const Div = styled.div`
  ${flex("start")};
  border: 2px soiid red;
  width: 100%;
`;

export const Span = styled.span`
  font-size: 1.4rem;
`;

export const Tagline = styled.p`
  font-size: 1.4rem;
  margin-top: 0.5rem;
  padding-bottom: 3rem;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;
  padding: 1rem 2rem;
  margin: 2rem 0;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.success};

  &:hover {
    background-color: ${({ theme }) => theme.colors.activeSuccess};
  }
`;
