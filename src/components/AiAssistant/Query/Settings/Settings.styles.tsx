import styled, { css } from "styled-components";
import { flex, display } from "@/styles/UtilityStyles.tsx";

export const Settings = styled.div`
  ${flex("center", "start", "column")};
  width: 85%;
  margin: 0 auto;
  margin-top: auto;
`;

export const Head = styled.div`
  background-color: ${({ theme }) => theme.colors.gray200};
  ${flex("space-between")};
  width: 100%;
  padding: 0.5rem;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const Body = styled.div`
  ${flex("center", "start", "column")};
  gap: 3rem;
  width: 70%;
  padding: 1rem;
  ${({ isOpenSettings }) =>
    isOpenSettings ? display("flex") : display("none")};

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 95%;
  }
`;

export const Creativity = styled.div`
  ${flex("space-between")};
  gap: 3rem;
  width: 100%;
`;

export const Options = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 80%;
  height: 3rem;
  position: relative;
`;

export const Selected = styled.div`
  padding: 0.5rem;
  cursor: pointer;
`;

export const ListBox = styled.ul`
  position: absolute;
  bottom: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  ${({ isOpen }) => (isOpen ? display("block") : display("none"))};
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.success};
    border-radius: 0.5rem;
  }
`;

export const List = styled.li`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  padding: 0.5rem;
  padding-left: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.success};
      color: ${({ theme }) => theme.colors.white};
      &:hover {
        background-color: ${({ theme }) => theme.colors.activeSuccess};
      }
    `}
`;

export const Progress = styled.div`
  ${flex("start")};
  gap: 3.5rem;
  width: 100%;
`;

export const ProgressBar = styled.div`
  ${flex()};
`;

export const FormControlProgress = styled.input`
  width: 15rem;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.Success};
  height: 0;
  border: 0.3rem solid ${({ theme }) => theme.colors.black};
  appearance: none;
  border-radius: 5px;
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 2.2rem;
    height: 2.2rem;
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: 50%;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    &::-webkit-slider-thumb {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Tone = styled.div`
  ${flex("start")};
  gap: 3rem;
  width: 100%;
`;

export const Audience = styled.div`
  ${flex("start")};
  gap: 2rem;
  width: 100%;
`;

export const FormControl = styled.input`
  padding: 0.8rem;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.4rem;
`;

export const Title = styled.span`
  font-size: 1.6rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const Label = styled.label`
  font-size: 1.3rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
`;

export const Text = styled.span`
  font-size: 1.3rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
`;

export const Icon = styled.span`
  font-size: 1.8rem;
  transform: rotate(0);
  transition: all 1s ease-in-out;
  ${({ isOpenSettings }) =>
    isOpenSettings &&
    css`
      transform: rotate(180deg);
    `}
`;
