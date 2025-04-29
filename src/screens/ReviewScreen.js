import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import MovieHeader from "../components/MovieHeader";
import BtnBack from "../components/BtnBack";
import Calificacion from "../components/Calificacion";
import Review from "../components/Review";

export default function ReviewScreen({ movies, setMovies }) {
    const route = useRoute();
    const { peliculas } = route.params;

    // Encuentra la película actual por su título
    const peliculaActual = movies.find((movie) => movie.title === peliculas.title);

    return (
        <View style={{ flex: 1 }}>
            <MovieHeader imagensrc={peliculas.image} />
            <BtnBack destino={"MainScreen"} />
            <Calificacion calificacion={peliculaActual?.reseña[0]?.usuarioCalificacion} />
            <ScrollView style={estilos.scrollContainer}>
                {peliculaActual?.reseña?.map((reseña, index) => (
                    <Review
                        key={index}
                        nombre={reseña.usuario}
                        imagen={reseña.usuarioimg}
                        calificacion={reseña.usuarioCalificacion}
                        comentario={reseña.comentario}
                    />
                ))}
            </ScrollView>
        </View>
    );
}



const estilos = StyleSheet.create({
    scrollContainer:{
        backgroundColor:"black",
        flex:1
    }
})