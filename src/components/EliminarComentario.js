import { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

export default function EliminarComentario({funcion}){
    
    const [pelicula, setPelicula] = useState("")
    const [usuario, setUsuario] = useState("")
    
    const eliminarComentario = () => {
        funcion(pelicula, usuario)
    }

    return(
        <View style={{borderStyle:"solid", borderColor:"#F15623", borderWidth:10, padding:10}}>
            <Text style={{fontSize:30, fontWeight:"bold", color:"white"}}>
                Eliminar Comentario
            </Text>
            <TextInput style={{color:"gray"}} placeholderTextColor={"gray"} value={pelicula} onChangeText={setPelicula} placeholder="Pelicula donde esta el comentario"></TextInput>
            <TextInput style={{color:"gray"}} placeholderTextColor={"gray"} value={usuario} onChangeText={setUsuario} placeholder="Coloca tu nombre de usuario"></TextInput>

            <TouchableOpacity style={botonStyles.container} onPress={eliminarComentario}>
                <Text style={botonStyles.text}>Eliminar</Text>
            </TouchableOpacity>

        </View>
    )
}

const botonStyles = StyleSheet.create({
    container:{
        backgroundColor: "#F15623",
        height: 50,
        display: "flex",
        justifyContent: "center"
    },
    text: {
        textAlign:"center",
        fontWeight:"bold"
    }
})