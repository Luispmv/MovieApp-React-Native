import React from "react"
import { StyleSheet, Image, TouchableOpacity } from "react-native"
import back from "../../assets/back.png";
import { useNavigation } from "@react-navigation/native";



export default function BtnBack({destino}){
    const navegacion = useNavigation()
    return(
        <TouchableOpacity 
            style={estilos.contenedor}
            onPress={()=>{
                console.log("presionado")
                navegacion.navigate(destino)
            }}
            >
            <Image source={back}></Image>
        </TouchableOpacity>
    )
}


const estilos = StyleSheet.create({
    contenedor:{
        width:50,
        height:50,
        backgroundColor:"red",
        position: "absolute",
        top:30,
        left:30,
        backgroundColor:"#F15623",
        display:"flex",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100,
        zIndex: 1
    }
})