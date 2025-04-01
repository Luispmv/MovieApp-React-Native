import React from "react";
import {Touchable, TouchableOpacity, View, StyleSheet, Text} from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import { peliculas } from "../data";

export default function MovieInformation({titulo, año, genero, reseñas, clasificacion, sinopsis}){
    const navegacion = useNavigation()

    const route = useRoute()
    const {peliculas} = route.params;

    return(
        <View style={estilos.main}>

            <View style={estilos.header}>
                <Text style={estilos.h1}>{titulo}</Text>
                <View style={estilos.btnContainer}>
                    <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>{año}</Text></TouchableOpacity>
                    <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>{genero}</Text></TouchableOpacity>
                    <TouchableOpacity 
                        style={estilos.btn}
                        onPress={()=>{
                            navegacion.navigate("ReviewScreen")
                            console.log(peliculas)
                        }}
                        >
                        <Text style={estilos.btnText}>{reseñas}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>{clasificacion}</Text></TouchableOpacity>
                </View>
            </View>

            <Text style={estilos.sinopsis}>
                {sinopsis}
            </Text>

        </View>
    )
}

const estilos = StyleSheet.create({
    main:{
        backgroundColor:"black",
        // marginTop:0
        display:"flex"
    },
    header:{
        display:"flex",
        flexDirection:"column",
    },
    h1:{
        color:"white",
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold"
    },
    btnContainer:{
        display:"flex",
        flexDirection:"row",
        marginTop:15,
        width:"75%",
        alignSelf:"center",
        justifyContent:"space-between"
    },
    btn:{
        backgroundColor:"#F15623",
        color:"white",
        padding:5,
        marginLeft:10,
        borderRadius:24,
    },
    btnText:{
        color:"white"
    },
    sinopsis:{
        backgroundColor:"black",
        height:1000,
        color: "white",
        marginTop:32,
        width:"75%",
        alignSelf:"center",
        textAlign:"justifyr"
    }
})