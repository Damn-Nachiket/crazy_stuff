// import { Stack } from "expo-router";
// import { TouchableOpacity , Text } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from "@expo/vector-icons";

// export default function Layout() {
//     const navigation = useNavigation();
//   return (
//     <GestureHandlerRootView>
//       <Stack
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen
//           name="(nobottombar)/accountInfo"
//           options={{ headerShown: true, headerTitleAlign: "center" , headerTitle: "Account Info"}}
//         />
//       </Stack>
//     </GestureHandlerRootView>
//   );
// }

// import { Stack } from "expo-router";
// import { TouchableOpacity } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from "@expo/vector-icons";

// export default function Layout() {
//     const navigation = useNavigation();
  
//     return (
//       <GestureHandlerRootView>
//         <Stack
//           screenOptions={{
//             headerShown: false,
//           }}
//         >
//           <Stack.Screen
//             name="(nobottombar)/accountInfo"
//             options={{
//               headerShown: true,
//               headerTitleAlign: "center",
//               headerTitle: "Account Info",
//               headerLeft: () => (
//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                   <Ionicons name="arrow-back" size={24} color="black" />
//                 </TouchableOpacity>
//               ),
//             }}
//           />
//         </Stack>
//       </GestureHandlerRootView>
//     );
// }

import { DownloadPicture } from '@/components/BottomSheet';
// import { useWallpapers } from '@/hooks/useWallpapers';
import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout() {
    // const walletpapers = useWallpapers();
    return <GestureHandlerRootView>
        <Stack screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="(nobottombar)/accountInfo" options={{ headerShown: true, headerTitle: "Account info", headerBackTitle: "Go Back" }} />
        </Stack>
    </GestureHandlerRootView>
}