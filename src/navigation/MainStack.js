import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainScreen from "../screens/MainScreen";
import MovieDetail from "../screens/MovieDetail";
import ReviewScreen from "../screens/ReviewScreen";


const Stack = createNativeStackNavigator()

const MainStack = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                />
                <Stack.Screen
                    name="MovieDetail"
                    component={MovieDetail}
                />

                <Stack.Screen
                    name="ReviewScreen"
                    component={ReviewScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack