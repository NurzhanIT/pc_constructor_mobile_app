import { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NewsItem from "./NewsItem";
const News = ({ navigation }) => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const fetcjPosts = () => {
    setIsLoading(true);
    axios
      .get("https://639b58d231877e43d68a2b03.mockapi.io/api/news-list/articles")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка при загрузке статьей");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    navigation.setOptions({ title: "News" });
    fetcjPosts();
  }, []);

  return (
    <>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <NewsItem
              title={item.title}
              img={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
    </>
  );
};
export default News;
