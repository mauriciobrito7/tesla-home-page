import styled from "styled-components";
import { colors } from "../../styles/theme";
import { device } from "../../styles/theme";

export const Btn = styled.button`
  background-color: ${(props) =>
    (props.imp === "primary" && ` ${colors.primary}`) ||
    (props.imp === "secondary" && `${colors.white}`)};
  height: 40px;
  width: 100%;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  border: none;
  font-weight: 600;

  ${device.tablet`
    height: 42px;
  `}

  ${device.desktop`
    height: 50px;
    width: 320px;
  `}

  &:focus {
    outline: none;
  }

  & > a {
    text-decoration: none;
    color: ${(props) =>
      (props.imp === "primary" && `${colors.white}`) ||
      (props.imp === "secondary" && `${colors.black}`)};
    font-size: 12px;
    text-align: center;
    ${device.tablet`
        font-size: 14px;
    `}

    ${device.desktop`
      font-size: 16px;
    `}
  }
`;
