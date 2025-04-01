import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Image } from "react-native";


export default function MovieHeader({imagensrc}){
    return(
        <View style={estilos.contenedor}>
            <LinearGradient
                colors={["transparent","rgba(0,0,0,1)"]}
                style={estilos.gradiente}
            />
            <Image style={estilos.imagen} source={{uri:imagensrc}}></Image>
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedor:{
        width: "100%",
        height: 418,
        position: "relative"
    },
    gradiente:{
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: 0,
        zIndex: 1 
    },
    imagen:{
        width:"100%",
        height:"100%"
    }
})