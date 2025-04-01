import React from "react"
import {StyleSheet, View, Text} from "react-native"



export default function Calificacion({calificacion}){
    return(
        <View style={estilos.contenedor}>
            <View style={estilos.btnContainer}>
            <Text style={estilos.texto}>{calificacion}</Text>
            </View>
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
    btnContainer:{
        width:100,
        height:100,
        backgroundColor:"#F15623",
        borderRadius:100,
        display:"flex",
        justifyContent:"center"
    },
    texto:{
        color:"white",
        fontSize:40,
        textAlign:"center"
    }
})
