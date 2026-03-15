import { View, Text } from "react-native";
import { HybridMath } from "react-native-math";
export default function HomeScreen() {
  const plus = HybridMath.add(4, 5);
  return (
    <View className="bg-red-300 flex-1 justify-center items-center">
      <Text>{plus}</Text>
    </View>
  );
}
