import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/native";
import MovieHeader from "../components/MovieHeader";
import BtnBack from "../components/BtnBack";
import Calificacion from "../components/Calificacion";
import Review from "../components/Review";


export default function ReviewScreen(){
    return(
        <View style={{flex:1}}>
            <MovieHeader></MovieHeader>
            <BtnBack destino={"MainScreen"}></BtnBack>
            <Calificacion></Calificacion>
            <ScrollView style={estilos.scrollContainer}>
                <Review></Review>
                <Review></Review>                
                <Review></Review>                
                <Review></Review>                
                
            </ScrollView>
        </View> 
    )    
}

const estilos = StyleSheet.create({
    scrollContainer:{
        backgroundColor:"black",
        flex:1
    }
})