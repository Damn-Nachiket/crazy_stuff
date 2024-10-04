import { Link, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
export default function Layout(){
    return <SafeAreaView>
        <View style={{height:"90%"}}>
            <Slot />
        </View>
        <Link href={"/explore"}>
            <Text>Explore Page</Text>
        </Link>
        <Link href={"/"}>
            <Text>For You Page</Text>
        </Link>
        <Link href={"/account"}>
            <Text>Account Page</Text>
        </Link>

        
    </SafeAreaView>
}