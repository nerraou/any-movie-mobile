import { View, Text, Image, TextInput } from "react-native";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

function SearchBar({ placeholder, onPress, value, onChangeText }: Props) {
  return (
    <View className="flex-row items-center bg-colors-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#A8B5DB"
        className="text-white flex-1 ml-2"
      />
    </View>
  );
}

export default SearchBar;
