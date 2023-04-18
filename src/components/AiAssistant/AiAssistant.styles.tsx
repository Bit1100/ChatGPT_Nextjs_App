import styled from "styled-components";
import { Section } from "@/styles/GlobalStyles";
import { flex } from "@/styles/UtilityStyles.tsx";

export const AISection = styled(Section)`
  ${flex("space-between", "start")};
  width: 90%;
  max-width: 1400px;
  margin: 0;
  margin-top: 3rem;
  height: 100vh;
  @media ${({ theme }) => theme.breakpoints.lg} {
    ${flex("start", "space-between", "column")};
    gap: 5rem;
    margin: 0 auto;
  }
`;
