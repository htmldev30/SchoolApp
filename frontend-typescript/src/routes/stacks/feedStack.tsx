import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LatestScreen } from '../../screens/LatestScreen'

export type FeedStackParamList = {
    Latest: undefined
}
const FeedStack = createStackNavigator<FeedStackParamList>()

export const FeedStackScreens = () => {
  return (
    <FeedStack.Navigator screenOptions={{ headerShown: false }}>
      <FeedStack.Screen component={LatestScreen} name="Latest"/>
    </FeedStack.Navigator>
  )
}
