import styled from "styled-components";
import { flex } from "@/styles/UtilityStyles.tsx";

export const Content = styled.div`
  ${flex()};
  flex-wrap: wrap;
  gap: 2rem;
  margin: 1rem;
  margin-top: 4rem;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.xl} {
    margin-top: 2rem;
    padding: 0;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 95%;
    /* gap: 4rem; */
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    width: 90%;
  }
`;

export const Card = styled.div`
  flex: 1 1 100%;
  border: none;
  max-width: 35rem;
  width: 35rem;
  height: 32rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  ${flex("space-berween", "start", "column")};
  transition: all 0.4s ease-in-out;
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 1rem 0;
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 1px 1px 3px 3px ${({ theme }) => theme.colors.gray400};
  }
  @media ${({ theme }) => theme.breakpoints.xxl} {
    width: 30rem;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 23rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 28rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 30rem;
  }
`;

export const Top = styled.div`
  ${flex("space-around", "start", "column")};
`;

export const Bottom = styled.div`
  margin-top: auto;
  ${flex("start")};
  margin: 1rem;
  position: absolute;
  bottom: 1rem;
`;

export const Icon = styled.span`
  border-radius: 50%;
  background-color: ${({ bgClr }) => bgClr};
  margin: 1rem;
  padding: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: 1rem;
`;

export const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.3rem;
  line-height: 1.8rem;
  margin: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.gray600};
`;

export const Category = styled.div`
  ${flex("start")};
`;

export const Span = styled.span`
  font-size: 1.2rem;
`;
