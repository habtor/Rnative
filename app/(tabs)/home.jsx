import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";

const Home = () => {
  const { data: posts } = useAppwrite(getAllPosts);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    // recall vidos
    setRefreshing(false);
  };

  console.log(posts);
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-2xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className=" items-start justify-between flex-row mb-6">
              <View className="flex-1">
                <Text className="font-pmedium text-xs text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-white text-2xl font-psemibold">
                  Saleh
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View className="flex-1 w-full pt-5 pb-8">
              <Text className="text-gray-100 font-pregular text-lg mb-3">
                Latest posts
              </Text>
            </View>
            <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No posts found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
