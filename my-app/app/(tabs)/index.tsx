import { View, Text } from "react-native";
import { HybridMath } from "react-native-math";

export default function HomeScreen() {
  const numOne = 315;
  const numTwo = 12384;
  const numPlus = HybridMath.add(numOne, numTwo);
  return (
    <View className="flex-1 justify-center bg-amber-200 items-center">
      <Text>
        {numOne} + {numTwo} = {numPlus}
      </Text>
    </View>
  );
}
