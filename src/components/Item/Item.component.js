import React from "react";
import { Button } from "../Button/Button.component";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./item.styles.css";
import {
  ItemBackground,
  Container,
  ItemText,
  ItemTitle,
  ItemDesc,
  ItemLowerThird,
  ItemButtons,
  ItemExpandIcon,
} from "./Item.styles";

export const Item = ({
  title,
  desc,
  backgroundImg,
  leftBtnText,
  leftBtnLink,
  rightBtnText,
  rightBtnLink,
  twoButtons,
  first,
}) => {
  return (
    <ItemBackground backgroundImg={backgroundImg}>
      <Container>
        <ItemText>
          <ItemTitle>{title}</ItemTitle>
          <ItemDesc>{desc}</ItemDesc>
        </ItemText>

        <ItemLowerThird>
          <ItemButtons>
            <Button imp="primary" text={leftBtnText} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnText} link={rightBtnLink} />
            )}
          </ItemButtons>
          {first && (
            <ItemExpandIcon>
              <ExpandMoreIcon />
            </ItemExpandIcon>
          )}
        </ItemLowerThird>
      </Container>
    </ItemBackground>
  );
};
