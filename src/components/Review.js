import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";


export default function Review({imagen, nombre, calificacion, comentario}){
    return(
        <View style={estilos.contenedor}>
            <View style={estilos.header}>
                <View style={estilos.userinfocontainer}>
                    <Image style={estilos.imagen} source={{uri:imagen}}></Image>
                    <Text style={estilos.nombre}>{nombre}</Text>
                </View>

                <Text style={estilos.calificacion}>{calificacion}/10</Text>

            </View>

            <Text style={estilos.reseña}>{comentario}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedor:{
        backgroundColor:"#F15623",
        display:"flex",
        flexDirection:"column",
        gap:20,
        padding: 10,
        width:"90%",
        borderRadius:20,
        alignSelf:"center",
        marginTop:20
    },
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    userinfocontainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    imagen:{
        height:40,
        width:40,
        borderRadius:100
    },
    nombre:{
        color:"white",
        fontSize:20
    },
    calificacion:{
        color:"white",
        fontSize:20
    },
    reseña:{
        fontSize:15,
        color:"white"
    }
})