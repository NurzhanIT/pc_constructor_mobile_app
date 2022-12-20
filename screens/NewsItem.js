import { View, Text } from "react-native";
import styled from "styled-components/native";

const NewsView = styled.View`
  flex: 5;
  background-color: green;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-top: 8px;
`;
const NewsImage = styled.Image`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 15px;
  width: 100%;
  height: 500px;
`;
const NewsText = styled.Text`
  width: 100%;
  background-color: white;
  padding-top: 4px;
  padding-bottom: 8px;
  padding-rigth: 20px;
  padding-left: 20px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const NewsItem = ({ img, title, createdAt }) => {
  return (
    <NewsView>
      <NewsImage source={{ uri: img }} />
      <NewsText>{title}</NewsText>
    </NewsView>
  );
};
export default NewsItem;
