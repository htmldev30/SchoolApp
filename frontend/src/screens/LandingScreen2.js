import React from 'react'
import { View, Text, Button } from 'react-native-ui-lib'

export const LandingScreen2 = ({ navigation }) => {
    return (
        <View flex paddingH-40 paddingT-140>
            <View marginT-80 center>
                <Text text70M>LANDING PAGE2</Text>
                <Button
                    outline
                    outlineColor="#000"
                    borderRadius={4}
                    marginT-40
                    label="Back to First Page"
                    onPress={() => navigation.navigate('Landing')}
                />
            </View>
        </View>
    )
}
