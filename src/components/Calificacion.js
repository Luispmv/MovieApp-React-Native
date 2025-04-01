import React from "react"
import {StyleSheet, View, Text} from "react-native"



export default function Calificacion(){
    return(
        <View style={estilos.contenedor}>
            <Text style={estilos.texto}>9.6</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedor:{
        width: "100%",
        height: 418,
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:0
    },
    texto:{
        backgroundColor:"#F15623",
        color:"white",
        padding:20,
        fontSize:40,
        borderRadius:100,
    }
})
