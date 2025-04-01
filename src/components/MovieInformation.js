import React from "react";
import {Touchable, TouchableOpacity, View, StyleSheet, Text} from "react-native"
import { useNavigation } from "@react-navigation/native";

export default function MovieInformation({id, titulo, año, genero, reseñas, clasificacion}){
    const navegacion = useNavigation()
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
                        }}
                        >
                        <Text style={estilos.btnText}>{reseñas}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>{clasificacion}</Text></TouchableOpacity>
                </View>
            </View>

            <Text style={estilos.sinopsis}>
            La historia sigue a Ashitaka, un príncipe maldecido por un demonio jabalí, que emprende un viaje para encontrar una cura. En su camino, se encuentra con San, la Princesa Mononoke, una joven criada por lobos que lucha por proteger los bosques de la destrucción humana. La película aborda el conflicto entre los humanos, representados por Lady Eboshi, quien busca expandir su ciudad minera, y los dioses y criaturas del bosque. Ashitaka trata de mediar entre ambos mundos, mientras enfrenta su propia maldición. La historia explora temas de naturaleza, venganza y coexistencia.
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