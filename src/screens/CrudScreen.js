import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import BtnBack from "../components/BtnBack";
import MainScreen from "./MainScreen";
import { useState } from "react";
import CrearPelicula from "../components/CrearPelicula"
import ActualizarPelicula from "../components/ActualizarPelicula";
import EliminarPelicula from "../components/EliminarPelicula";
import CrearReseña from "../components/CrearComentario";
import CrearComentario from "../components/CrearComentario";

export default function CrudScreen({peliculas, setPeliculas}){
    
    const create = (nuevaPelicula)=>{
        setPeliculas([...peliculas, nuevaPelicula])
        console.log(peliculas)
    }
    
    const update = (pNombre, pImagen, pCategory, pCalificacion, pSinopsis) => {
        const peliculaEncontrada = peliculas.find(
            (movie) => movie.title === pNombre
        );
    
        if (peliculaEncontrada) {
            // Actualizando las propiedades de la película encontrada
            peliculaEncontrada.image = pImagen;
            peliculaEncontrada.category = pCategory;
            peliculaEncontrada.calificacion = pCalificacion;
            peliculaEncontrada.sinopsis = pSinopsis;
    
            console.log('Película actualizada:', peliculaEncontrada);
        } else {
            console.log('Película no encontrada');
        }
    };

    const deleteMovie = (peliNombre) => {
        const indice = peliculas.findIndex(
            (movie) => movie.title === peliNombre
        );
        if (indice !== -1) {
            peliculas.splice(indice, 1);
        }
    };
    
    const createReview = ({ nuevoComentario, pNombre }) => {
        const nuevaListaPeliculas = peliculas.map((movie) => {
            if (movie.title === pNombre) {
                return {
                    ...movie,
                    reseña: [...movie.reseña, nuevoComentario]
                };
            }
            return movie;
        });
    
        setPeliculas(nuevaListaPeliculas);
    };

    return(
        <ScrollView>
            <BtnBack destino={MainScreen}></BtnBack>

            <View style={formContainer.container}>
                <CrearPelicula funcion={create}></CrearPelicula>
                <ActualizarPelicula funcion={update}></ActualizarPelicula>
                <EliminarPelicula funcion={deleteMovie}></EliminarPelicula>
            
                <CrearComentario funcion={createReview}></CrearComentario>
            </View>
        </ScrollView>
    )
}

// Estilos para el contenedor de los formularios CRUD
const formContainer = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginTop: 90,
        marginRight: 30,
        display: "flex",
        flexDirection: "column",
        gap: 20
    }
})

