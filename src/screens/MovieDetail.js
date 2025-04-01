import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import MovieHeader from "../components/MovieHeader";
import MovieInformation from "../components/MovieInformation";
import BtnBack from "../components/BtnBack";


export default function MovieDetail(){

    return(
        <View>
            <MovieHeader></MovieHeader>
            <MovieInformation></MovieInformation>
            <BtnBack destino="MainScreen"></BtnBack>
        </View>
    )
}