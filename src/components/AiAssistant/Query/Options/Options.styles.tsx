import styled, { css } from "styled-components";
import { flex, display } from "@/styles/UtilityStyles.tsx";

export const OptionsWrapper = styled.div`
  ${flex("center", "start", "column")};
  width: 85%;
  margin: 0 auto;
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 95%;
  }
`;

export const Options = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  position: relative;
`;

export const Selected = styled.div`
  ${flex("start")};
  border: 1.5px solid transparent;
  transition: all 0.3s ease-in-out;
  padding: 0.5rem;
  &:hover {
    border: 1.5px solid ${({ theme }) => theme.colors.activeInfo};
  }
`;

export const ListBox = styled.ul`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.activeInfo};
  border-top: transparent;
  height: 23rem;
  ${({ isOpen }) => (isOpen ? display("block") : display("none"))}
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: 0.5rem;
  }
`;

export const List = styled.li`
  ${flex("start")};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.dark};
      &:hover {
        background-color: ${({ theme }) => theme.colors.black};
      }
    `}
`;

export const Heading = styled.h3`
  text-align: start;
  font-size: 1.6rem;
  margin: 0.8rem 0;
`;

export const Heading2 = styled.h4`
  font-size: 1.5rem;
  padding: 0.4rem 1rem;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

export const Icon = styled.span`
  padding: 0.5rem;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  transform: rotate(0);
  transition: all 1s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const Title = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;
