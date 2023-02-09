import React from 'react'
import { View, Text, Button } from 'react-native-ui-lib'

export const LandingScreen = ({ navigation }) => {
    return (
        <View flex paddingH-40 paddingT-140>
            <View marginT-80 center>
                <Text text70M>LANDING PAGE</Text>
                <Button
                    outline
                    outlineColor="#000"
                    borderRadius={4}
                    marginT-40
                    label="Go to Second Page"
                    onPress={() => navigation.navigate('Landing2')}
                />
            </View>
        </View>
    )
}
