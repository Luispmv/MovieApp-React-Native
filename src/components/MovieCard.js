import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function MovieCard(){
    return(
        <TouchableOpacity style={estilos.contenedor}>
            <LinearGradient 
                colors={["transparent","rgba(0,0,0,0.8)"]}
                style={estilos.gradiente}
            />
            <Image style={estilos.imagen} source={{uri:"https://film-grab.com/wp-content/uploads/photo-gallery/thumb/Princess_Mononoke_034.jpg?bwg=1569601131"}}></Image>
            <Text style={estilos.texto}>Nombre de la pelicula</Text>
        
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
    }
})