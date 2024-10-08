import React, { useCallback, useRef } from "react";
import {
  Text,
  Button,
  View,
  Image,
  StyleSheet,
  useColorScheme,
  Pressable,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? "light";

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["95%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ height: 0 }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: wallpaper.url }} />
        <View style={styles.topBar}>
          <Ionicons
            name={"close"}
            size={24}
            color={theme === "dark" ? Colors.light.icon : Colors.dark.icon}
          />
          <View style={styles.topBarInner}>
            <Ionicons
              name={"heart"}
              size={24}
              color={theme === "dark" ? Colors.light.icon : Colors.dark.icon}
            />
            <Ionicons
              name={"share-outline"}
              size={24}
              color={theme === "dark" ? Colors.light.icon : Colors.dark.icon}
              style={{ paddingLeft: 4 }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <ThemedText style={styles.text}> {wallpaper.name} </ThemedText>
        </View>
        <DownloadButton />
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton() {
  const theme = useColorScheme() ?? "light";
  return <Pressable
      style={{
        
        backgroundColor: "black",
        padding: 10,
        marginHorizontal: 40,
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius : 10
      }}
    >
      <Ionicons
              name={"cloud-download-outline"}
              size={24}
              color={theme === "dark" ? Colors.light.icon : Colors.dark.icon}
              style={{ paddingRight: 7 , paddingTop: 5 }}
            />
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "600"
        }}
      >
        Downwload
      </Text>
    </Pressable>
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "70%",
    borderRadius: 15,
  },
  topBar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  topBarInner: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    width: "100%",
  },
  text: {
    paddingTop: 20,
    color: "black",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
  },
});

export default DownloadPicture;
