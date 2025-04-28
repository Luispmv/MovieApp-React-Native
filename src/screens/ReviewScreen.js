import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import MovieHeader from "../components/MovieHeader";
import BtnBack from "../components/BtnBack";
import Calificacion from "../components/Calificacion";
import Review from "../components/Review";


export default function ReviewScreen(){

    const route = useRoute()
    const {peliculas} = route.params;

    return(
        <View style={{flex:1}}>
            <MovieHeader imagensrc={peliculas.image}></MovieHeader>
            <BtnBack destino={"MainScreen"}></BtnBack>
            <Calificacion calificacion={peliculas.reseña[0]?.usuarioCalificacion}></Calificacion>
            <ScrollView style={estilos.scrollContainer}>
                <Review 
                    nombre={peliculas.reseña[0]?.usuario} 
                    imagen={peliculas.reseña[0]?.usuarioimg}
                    calificacion={peliculas.reseña[0]?.usuarioCalificacion} 
                    comentario={peliculas.reseña[0]?.comentario}></Review> 
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