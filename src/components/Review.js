import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";


export default function Review(){
    return(
        <View style={estilos.contenedor}>
            <View style={estilos.header}>
                <View style={estilos.userinfocontainer}>
                    <Image style={estilos.imagen} source={{uri:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuqmrx5e_mLUJdFRMBSjfvojvWtGs8th027w_2GVvqouy6dkr_MbHORDgV0GTq-PlKuqfFlhjJi1iIziGq9Rc2ag"}}></Image>
                    <Text style={estilos.nombre}>Nombre Usuario</Text>
                </View>

                <Text style={estilos.calificacion}>9.6/10</Text>

            </View>

            <Text style={estilos.reseña}>Me encantó La Princesa Mononoke. La manera en que combina la belleza de la naturaleza con una historia tan profunda y llena de emoción es increíble. Los personajes está muy bien desarrollada</Text>
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