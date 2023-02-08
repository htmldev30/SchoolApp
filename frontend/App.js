import { StatusBar } from 'expo-status-bar';
import { View, TextField, Text, Button } from 'react-native-ui-lib';
import {Colors} from 'react-native-ui-lib';

Colors.loadColors({
  green: '#CCD5AE',
  lightGreen: '#E9EDC9',
  white: "#FEFAE0" ,
  deepWhite: "#FAEDCD",
  brown: "#D4A373"
})

export default function App() {
  return (
    <View flex paddingH-40 paddingT-140>
    <View marginT-80 center>
         <Text text70M style={{color: Colors.green}}>Welcome To School App</Text>
     </View>
  </View>
  );
}


