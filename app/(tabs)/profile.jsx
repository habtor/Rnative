import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState";
import { getUserPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCart from "../../components/VideoCart";
import { useGlobalContext } from "../../context/GlobalProvider";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();

  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCart video={item} />}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 ">
            <Text className="font-pmedium text-xs text-gray-100">
              Search results
            </Text>
            <Text className="text-white text-2xl font-psemibold"></Text>
            <View className="mt-6 mb-8">
              {/* <SearchInput initialQuery={query} /> */}
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No posts found"
            subtitle="Np videos found for the search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
