import styled from "styled-components";
import { bounce } from "../../styles/animations";
import { device } from "../../styles/theme";

export const ItemBackground = styled.div`
  background-image: url(${(props) => props.backgroundImg});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
`;

export const Container = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemText = styled.div`
  margin-top: 20%;
  width: 80vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  color: #393c41;
  align-items: center;
  justify-content: flex-start;
`;

export const ItemTitle = styled.h2`
  margin-top: calc(16vh + 20px);
  font-size: 27px;
  font-weight: normal;
  text-align: center;
  ${device.tablet`
      margin-top: calc(8vh);
  `}
  ${device.desktop`
      font-size: 34px;
  `}
  ${device.large`
      font-size: 45px;
      margin-top: 8px;
  `}
`;

export const ItemDesc = styled.p`
  font-weight: 100;
  font-size: 14px;

  ${device.desktop`
      font-size: 16px;
  `}
  ${device.large`
      font-size: 18px;
  `}
`;

export const ItemLowerThird = styled.div`
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
`;

export const ItemButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
  ${device.custom(
    `
    flex-wrap: nowrap;
  `,
    "600px"
  )}
`;

export const ItemExpandIcon = styled.div`
  color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${bounce()}

  svg {
    ${device.desktop`
      width: 1.5em;
      height: 1.5em;
    `}
  }
`;
