import styled, { css } from "styled-components";
import { flex, display } from "@/styles/UtilityStyles.tsx";

const textStatus = (clr) => {
  return css`
    color: ${clr};
    font-weight: 900;
  `;
};

const wrapperStatus = (borderClr, bgClr) => {
  return css`
    border: 2px solid ${borderClr};
    background-color: ${bgClr};
  `;
};

const creditsStatus = (credits, wrapper = "") => {
  if (credits < 100) {
    if (wrapper == "wrapper") {
      return wrapperStatus(
        ({ theme }) => theme.colors.danger,
        ({ theme }) => theme.colors.lightDanger
      );
    } else {
      return textStatus(({ theme }) => theme.colors.activeDanger);
    }
  } else if (credits < 500) {
    if (wrapper == "wrapper") {
      return wrapperStatus(
        ({ theme }) => theme.colors.warning,
        ({ theme }) => theme.colors.lightWarning
      );
    } else {
      return textStatus(({ theme }) => theme.colors.activeWarning);
    }
  } else {
    if (wrapper == "wrapper") {
      return wrapperStatus(
        ({ theme }) => theme.colors.success,
        ({ theme }) => theme.colors.lightSuccess
      );
    } else {
      return textStatus(({ theme }) => theme.colors.activeSuccess);
    }
  }
};

// Navbar
export const Header = styled.header`
  width: calc(100% - 8rem);
  margin-left: auto;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  ${flex("")};

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 100%;
    ${flex("space-between")};
  }
`;

// Brand Wraaper & its contents visible only @lg
export const BrandWrapper = styled.div`
  ${display("none")};

  @media ${({ theme }) => theme.breakpoints.lg} {
    ${flex()};
  }
`;

export const Hamburger = styled.div`
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

export const NavbarBrand = styled.div`
  cursor: pointer;
`;

// Items on the Navbar
export const Div1 = styled.div`
  ${flex("center", "center", "column")};
  margin: 1rem;
  @media ${({ theme }) => theme.breakpoints.lg} {
    ${display("none")};
  }
`;

export const Div2 = styled.div`
  ${flex("")};
  flex: 1 1;
  visibility: visible;
  ${({ credits }) => {
    return credits !== ""
      ? creditsStatus(credits, "wrapper")
      : css`
          visibility: hidden;
        `;
  }}
  border-radius: 1rem;
  padding: 0.5rem;
  @media ${({ theme }) => theme.breakpoints.lg} {
    flex: 0 0 60%;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    flex: 1 1;
  }
`;

export const Div3 = styled.div`
  ${flex()};
  position: relative;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2rem;
`;

export const Span = styled.span`
  font-weight: 700;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.dark};

  ${({ credits }) => credits >= 0 && creditsStatus(credits)}
  @media ${({ theme }) => theme.breakpoints.sm} {
    ${({ credits }) =>
      credits >= 0 &&
      css`
        margin-left: -0.2rem;
      `}
  }
`;

export const Warning = styled.div`
  ${flex()};
  font-size: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.4rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const AvatarWrapper = styled.div`
  cursor: pointer;
`;

export const ListWrapper = styled.ul`
  position: absolute;
  top: 7rem;
  right: 1rem;
  width: 20rem;
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.2rem;
  visibility: hidden;
  opacity: 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      top: 5.5rem;
      opacity: 1;
      visibility: visible;
    `}
`;

export const List = styled.li`
  padding: 1rem;
  padding-left: 1.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPrimary};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 11;
  ${display("none")};
  cursor: pointer;
  ${({ isLogout }) => (isLogout ? display("block") : display("none"))}
`;

export const LogoutModal = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  border-radius: 1rem;
  ${flex()};
  padding: 1rem;
  width: 30rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease-in-out;

  ${({ isLogout }) =>
    isLogout &&
    css`
      transform: translate(-50%, -50%) scale(1);
    `}
`;

export const ModalBody = styled.div`
  padding: 2rem 0;
  ${flex("center", "center", "column")};
  gap: 2.5rem;
  margin-left: -0.5rem;
`;

export const BtnWrapper = styled.div`
  ${flex()};
  gap: 0.5rem;
`;

export const Button = styled.span`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0 1rem;
  font-size: 1.3rem;
  border: 2px solid ${({ theme }) => theme.colors.lightPrimary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPrimary};
  }
`;
