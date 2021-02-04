import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  font-size: 34px;
  color: #393c41;
  align-items: center;
  flex: 1;
`;

export const ItemTitle = styled.h2`
  font-weight: normal;
  text-align: center;
`;

export const ItemDesc = styled.p`
  font-weight: 200;
  font-size: 14px;
`;

export const ItemLowerThird = styled.div`
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
`;

export const ItemButtons = styled.div`
  display: flex;
`;

export const ItemExpandIcon = styled.div`
  color: white;
  width: 100%;
  margin-top: 3%;
  justify-content: center;
  text-align: center;
`;
