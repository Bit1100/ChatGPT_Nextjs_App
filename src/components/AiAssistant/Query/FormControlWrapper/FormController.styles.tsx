import styled from "styled-components";
import { flex, display } from "@/styles/UtilityStyles.tsx";

export const FormControlWrapper = styled.div`
  ${flex("start", "start", "column")};
  width: 85%;
  margin: 3rem auto;
  gap: 2.5rem;
  height: 40rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 0.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 95%;
  }
`;

export const FormControl = styled.h3`
  ${flex("center", "start", "column")};
  width: 100%;
  font-size: 1.5rem;
  margin: 1rem 0;
  font-size: 1.4rem;
  line-height: 2rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

export const Input = styled.input`
  padding: 0.8rem;
  width: 100%;
  border: none;
  outline: none;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: none;
  outline: none;
`;
