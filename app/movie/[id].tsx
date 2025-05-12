import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

const Details = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Movie id is {id}</Text>
    </View>
  );
};

export default Details;
