import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainScreen from "../screens/MainScreen";
import MovieDetail from "../screens/MovieDetail";
import ReviewScreen from "../screens/ReviewScreen";
import CrudScreen from "../screens/CrudScreen";


const Stack = createNativeStackNavigator()

const MainStack = ({peliculas, setPeliculas})=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {/* <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                /> */}

                <Stack.Screen name="MainScreen">
                    {props => (
                        <MainScreen
                            {...props}
                            peliculas={peliculas}
                        />
                    )}
                </Stack.Screen>


                <Stack.Screen
                    name="MovieDetail"
                    component={MovieDetail}
                />

                {/* <Stack.Screen
                    name="ReviewScreen"
                    component={ReviewScreen}
                /> */}

                <Stack.Screen name="ReviewScreen"> 
                    {props =>(
                        <ReviewScreen
                            {...props}
                            movies = {peliculas}
                            setMovies = {setPeliculas}
                        />
                    )}
                </Stack.Screen>

                {/* <Stack.Screen
                    name="CrudScreen"
                    component={CrudScreen}
                /> */}

                <Stack.Screen name="CrudScreen">
                    {props => (
                        <CrudScreen
                            {...props}
                            peliculas={peliculas}
                            setPeliculas={setPeliculas}
                        />
                    )}
                </Stack.Screen>


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack