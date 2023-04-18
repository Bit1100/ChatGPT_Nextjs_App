import { css } from "styled-components";

export const flex = (
  justify = "center",
  align = "center",
  direction = "row"
) => {
  return css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    gap: 0.5rem;
  `;
};

export const display = (display) => {
  return css`
    display: ${display};
  `;
};
