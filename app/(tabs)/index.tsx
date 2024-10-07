import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { Text, Image, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function explore() {
  const wallpapers = useWallpaper();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{ uri: wallpapers[0]?.url ?? "" }}
          />
        }
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers}
              renderItem={({ item }) =><View style={styles.imageContainer}><ImageCard wallpaper={item} /></View>}
              keyExtractor={(item) => item.name}
            ></FlatList>
          </ThemedView>

          <ThemedView style={styles.innerContainer}>
          <FlatList
              data={wallpapers}
              renderItem={({ item }) =><View style={styles.imageContainer}><ImageCard wallpaper={item} /></View>}
              keyExtractor={(item) => item.name}
            ></FlatList>
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer:{
    paddingVertical: 10
  }
});
