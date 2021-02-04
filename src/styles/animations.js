import { keyframes, css } from "styled-components";

const bounceKeyFrame = keyframes`
    0% {
        transform: translateY(0px);
    }
    40%{
      transform: translateY(8px);
    }

    80% {
      transform: translateY(6px);
    }
    100%{
      transform: translateY(4px);
    }
`;
export const bounce = ({
  duration = "1s",
  manyTimes = "infinite",
  type = "ease-out",
} = {}) => {
  return css`
    animation: ${duration} ${manyTimes} ${bounceKeyFrame} ${type};
  `;
};
