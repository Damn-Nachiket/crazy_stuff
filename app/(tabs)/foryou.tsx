import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View , Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
}

function Suggested(){
    return<View>
        <Text> some suggestions </Text>
    </View>
}

function Liked(){
    return <View>
        <Text> your liked images</Text>
    </View>
}

function Library(){
    return <View>
        <Text> your library </Text>
    </View>
}