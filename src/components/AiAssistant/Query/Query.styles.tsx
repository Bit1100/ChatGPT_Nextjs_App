import styled from "styled-components";
import { flex } from "@/styles/UtilityStyles.tsx";

export const Query = styled.div`
  flex: 1 1;
  ${flex("center", "start", "column")};
  height: 80vh;
  min-height: 80vh;
  max-height: 80vh;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 85%;
    margin: 0 auto;
    margin-top: 4rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 95%;
    margin-top: 3rem;
  }
`;
