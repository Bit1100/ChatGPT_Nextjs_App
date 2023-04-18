import styled from "styled-components";
import { flex } from "@/styles/UtilityStyles.tsx";

export const Result = styled.div`
  flex: 1 1;
  padding: 0.5rem;
  ${flex("start")};
  @media ${({ theme }) => theme.breakpoints.lg} {
    margin-top: 5rem;
    width: 85%;
    margin: 0 auto;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 95%;
  }
`;

export const Answers = styled.div`
  width: 100%;
`;

export const Heading = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.6rem;
  }
`;

export const Content = styled.div`
  margin: 2rem;
  margin-left: 0;
  ${flex("start", "start")};
  position: relative;

  @media ${({ theme }) => theme.breakpoints.lg} {
    ${flex("start")};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    ${flex("start")};
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightSuccess};
  ${flex("center", "start", "column")};
  width: 100%;
  padding: 0.5rem;
`;

export const Info = styled.div`
  background-color: ${({ theme }) => theme.colors.lightSuccess};
  padding: 1.2rem;
  padding-left: 0rem;
  border-radius: 1rem;
  text-align: justify;
`;

export const Description = styled.p`
  border-radius: 1rem;
  padding: 1rem;
  padding-top: 4rem;
  font-size: 1.5rem;
  text-align: justify;
  line-height: 2rem;
  background-color: ${({ theme }) => theme.colors.lightSuccess};
  width: 100%;
  white-space: break-spaces;
  padding-bottom: 3rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.3rem;
    padding: 0.5rem;
    padding-top: 4rem;
  }
`;

export const CopyWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.activeSuccess};
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  ${flex()};
  right: 0;
  top: 0.5rem;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 10px;
`;

export const Span = styled.span`
  font-size: 1.3rem;
  user-select: none;
`;
