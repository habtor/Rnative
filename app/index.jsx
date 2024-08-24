import { Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-blue-600">
        Go to Home
      </Link>
    </View>
  );
}
