import { css } from 'styled-components';

export const sizes = {
  desktopXL: 1640,
  desktop: 1150,
  tabletXL: 1024,
  tablet: 768,
  phone: 361,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
