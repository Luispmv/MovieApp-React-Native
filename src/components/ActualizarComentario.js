import { useState } from "react";
import { TouchableOpacity,  TextInput, View, StyleSheet, Text } from "react-native";

export default function ActualizarComentario({funcion}){

    const [nombre, setNombre] = useState("")
    const [usuario, setUsuario] = useState("")
    const [usuarioCalificacion, setUsuarioCalificacion] = useState("")
    const [comentario, setComentario] = useState("")

    const actualizarComentario = ()=>{
        // const pNombre = nombre
        // const ucalificacion = usuarioCalificacion
        // const ucomentario = comentario

        const resultado = funcion(nombre, usuario,  usuarioCalificacion, comentario)
    }


    return(
        <View style={{borderStyle:"solid", borderColor:"#F15623", borderWidth:10, padding:10}}>
            <Text style={{fontSize:28, fontWeight:"bold", color:"white"}}>
                Actualizar Comentario
            </Text>
            <TextInput style={{color:"gray"}} placeholderTextColor={"gray"} value={nombre} onChangeText={setNombre} placeholder="Pelicula donde esta el comentario"></TextInput>
            <TextInput style={{color:"gray"}} placeholderTextColor={"gray"} value={usuario} onChangeText={setUsuario} placeholder="Coloca tu nombre de usuario"></TextInput>
            <TextInput style={{color:"gray"}} placeholderTextColor={"gray"} value={usuarioCalificacion} onChangeText={setUsuarioCalificacion} placeholder="Nueva calificacion" keyboardType="numeric"></TextInput>
            <TextInput style={{color:"gray"}} placeholderTextColor={"gray"} value={comentario} onChangeText={setComentario} placeholder="Nuevo Comentario"></TextInput>
        
            <TouchableOpacity style={botonStyles.container} onPress={actualizarComentario}>
                <Text style={botonStyles.text}>Actualizar</Text>
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