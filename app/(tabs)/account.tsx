import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function account (){
    return <SafeAreaView>
        <Text> Your Account Page </Text>
        <Link href={"/accountInfo"}>
            <Text> Account Info </Text>
        </Link>
    </SafeAreaView>
}