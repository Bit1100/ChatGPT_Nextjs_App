import styled from "styled-components";
import { flex } from "@/styles/UtilityStyles.tsx";

export const FormWrapper = styled.div`
  border-radius: 0.3rem;
  width: 40rem;
  margin: 0 auto;
  ${flex("center", "center", "column")};
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 1rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 37rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 32rem;
  }
`;

export const Logo = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const TitleWrapper = styled.div`
  ${flex("center", "center", "column")};
`;

export const Form = styled.form`
  ${flex("center", "start", "column")};
  width: 35rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 1.5rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 28rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 25rem;
  }
`;

export const FormControlWrapper = styled.div`
  ${flex("center", "start", "column")};
  width: 100%;
`;

export const FormControl = styled.input`
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.8rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  width: 100%;
`;

export const Heading = styled.h2`
  font-size: 2rem;
`;

export const ActionWrapper = styled.h3`
  ${flex("center", "start", "column")};
  gap: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Span = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.dark};
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray600};
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.activePrimary};
`;
