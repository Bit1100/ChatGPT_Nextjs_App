import styled, { css } from "styled-components";
import { flex, display } from "@/styles/UtilityStyles.tsx";

/* Constants for the sidebar width for various screens */
const SIDEBAR_WIDTH_XL = "28rem";
const SIDEBAR_WIDTH_LG = "25rem";
const SIDEBAR_WIDTH_SM = "23rem";

/* Sidebar Styles */
export const Sidebar = styled.div`
  width: 8rem;
  max-width: 8rem;
  height: 100vh;
  position: fixed;
  top: -0.05rem;
  z-index: 111;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.15s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    width: ${SIDEBAR_WIDTH_XL};
    max-width: ${SIDEBAR_WIDTH_XL};
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    ${({ active }) =>
      active
        ? css`
            display: block;
            color: ${({ theme }) => theme.colors.white};
            font-weight: 600;
            width: ${SIDEBAR_WIDTH_LG};
            max-width: ${SIDEBAR_WIDTH_LG};
            &:hover {
              max-width: ${SIDEBAR_WIDTH_LG};
            }
          `
        : display("none")};
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    ${({ active }) =>
      active
        ? css`
            width: ${SIDEBAR_WIDTH_SM};
            max-width: ${SIDEBAR_WIDTH_SM};
            &:hover {
              max-width: ${SIDEBAR_WIDTH_SM};
            }
          `
        : display("none")};
  }
`;

/* Overlay Styles*/
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  bottom: 0;
  left: ${SIDEBAR_WIDTH_LG};
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 11;
  ${display("none")};
  @media ${({ theme }) => theme.breakpoints.lg} {
    ${({ active }) => (active ? display("block") : display("none"))};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    left: ${SIDEBAR_WIDTH_SM};
  }
`;

/* Brand Styles */
export const Brand = styled.div`
  ${flex()};
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 2rem;
  ${({ hovered }) => (hovered ? display("block") : display("none"))}
  @media ${({ theme }) => theme.breakpoints.lg} {
    ${({ active }) => (active ? display("block") : display("none"))};
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.7rem;
  }
`;

/* Menu Styles */
export const Menu = styled.ul`
  ${flex("center", "", "column")}
`;

export const NavLink = styled.li`
  font-size: 2rem;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  margin-left: 2rem;
  ${flex("start")};
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray800};
  }
`;

export const Label = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.gray400};
  ${({ hovered }) => (hovered ? display("inline-block") : display("none"))};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    ${({ active }) => (active ? display("inline-block") : display("none"))};
  }
`;
