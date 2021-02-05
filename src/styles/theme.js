export const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1200px",
  large: "1400px",
};

export const device = {
  mobile: (styles) => {
    return `@media (min-width:${breakpoints.mobile}){
      ${styles}
    }`;
  },
  tablet: (styles) => {
    return `@media (min-width:${breakpoints.tablet}){
      ${styles}
    }`;
  },
  desktop: (styles) => {
    return `@media (min-width:${breakpoints.desktop}){
      ${styles}
    }`;
  },
  large: (styles) => {
    return `@media (min-width:${breakpoints.large}){
      ${styles}
    }`;
  },
  custom: (styles, width) => {
    return `@media (min-width:${width}){
      ${styles}
    }`;
  },
};

export const colors = {
  black: "#000000",
  white: "#ffffff",
  primary: "rgba(23,26,32,0.8)",
};
