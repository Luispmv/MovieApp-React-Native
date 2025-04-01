import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import MovieHeader from "../components/MovieHeader";
import MovieInformation from "../components/MovieInformation";
import BtnBack from "../components/BtnBack";
import { peliculas } from "../data";
import { useRoute } from "@react-navigation/native";


export default function MovieDetail(){
    const route = useRoute()
    const {peliculas} = route.params;

    return(
        <View>
            <MovieHeader imagensrc={peliculas.image}></MovieHeader>
            <MovieInformation
                titulo={peliculas.title}
                año={peliculas.year}
                genero={peliculas.category}
                reseñas={peliculas.calification}
                clasificacion={peliculas.clasificación}
                sinopsis={peliculas.sinopsis}
            ></MovieInformation>
            <BtnBack destino="MainScreen"></BtnBack>
        </View>
    )
}