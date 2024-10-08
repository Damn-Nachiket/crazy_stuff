import DownloadPicture from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { useState } from "react";
import { Text, Image, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function explore() {
  const wallpapers = useWallpaper();
  const [selectedWallpaper , setSelectedWallpaper] = useState< null | Wallpaper>(null);
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
              data={wallpapers.filter((_, index) => index %2 === 0)}
              renderItem={({ item }) =><View style={styles.imageContainer}><ImageCard onPress = {() =>{
                setSelectedWallpaper(item)
              }} wallpaper={item} /></View>}
              keyExtractor={(item) => item.name}
            ></FlatList>
          </ThemedView>

          <ThemedView style={styles.innerContainer}>
          <FlatList
              data={wallpapers.filter((_, index) => index %2 === 1)}
              renderItem={({ item }) =><View style={styles.imageContainer}><ImageCard onPress = {() =>{
                setSelectedWallpaper(item)
              }} wallpaper={item} /></View>}
              keyExtractor={(item) => item.name}
            ></FlatList>
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
      {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose = {() => setSelectedWallpaper(null)} />}
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
