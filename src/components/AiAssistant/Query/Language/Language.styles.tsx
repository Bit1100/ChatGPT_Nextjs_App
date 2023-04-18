import styled, { css } from "styled-components";
import { flex, display } from "@/styles/UtilityStyles.tsx";

export const Language = styled.div`
  ${flex("space-between")};
  width: 85%;
  height: 4rem;
  margin: 0.5rem auto;
  position: relative;
`;

export const Options = styled.div`
  width: 50%;
`;

export const Actions = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Selected = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  width: fit-content;
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.7rem;
  }
`;

export const ListBox = styled.ul`
  position: absolute;
  bottom: 4rem;
  display: none;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  height: 25rem;
  width: 25rem;
  ${({ isOpen }) => (isOpen ? display("block") : display("none"))}
  overflow-y: scroll;
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
  gap: 2rem;
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
      color: ${({ theme }) => theme.colors.white};
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray800};
      }
    `}
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  ${flex()};
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}

  &:hover {
    font-weight: 600;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.5rem 1rem;
  }
`;

export const Text = styled.span`
  font-size: 1.5rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const Icon = styled.span`
  font-size: 1.8rem;
`;
