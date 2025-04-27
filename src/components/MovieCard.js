import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
//import { peliculas } from '../data';  // Archivo javascript con un array de objetos JSON con informacion de peliculas



export default function MovieCard({id, imagensrc, title, peliculas}){
    const navegacion = useNavigation();
    return(
        <TouchableOpacity 
            style={estilos.contenedor}
            onPress={()=>{
                const seleccion = peliculas.find(pelicula => pelicula.id == id)
                navegacion.navigate("MovieDetail", {peliculas:seleccion})
            }}
            >
            <LinearGradient 
                colors={["transparent","rgba(0,0,0,1)"]}
                style={estilos.gradiente}
            />
            <Image style={estilos.imagen} source={{uri: imagensrc}}></Image>
            <Text style={estilos.texto}>{title}</Text>
        
        </TouchableOpacity>
    )
}


const estilos = StyleSheet.create({
    contenedor:{
        width: 180,
        height: 280,
        position: "relative",
        margin: 5
    },
    gradiente: {
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: 0,
        zIndex: 1
    },
    imagen:{
        width:"100%",
        height:"100%"
    },
    texto:{
        position:"absolute",
        color:"white",
        textAlign:"center",
        width:"100%",
        bottom:"50%",
        fontWeight:"bold",
        fontSize:15
    }
})