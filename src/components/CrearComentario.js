import { useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native"

export default function CrearComentario({funcion}){

    const [pelicula, setPelicula] = useState("")
    const [usuario, setUsuario] = useState("")
    const [usuarioImg, setUsuarioImg] = useState("")
    const [usuarioCalificacion, setUsuarioCalificacion] = useState("")
    const [comentario, setComentario] = useState("")

    const agregarComentario = () =>{
        const pNombre  = pelicula
        const nuevoComentario = {
            usuarioimg: usuarioImg,
            usuario: usuario,
            usuarioCalificacion: usuarioCalificacion,
            comentario: comentario
        }
        funcion({nuevoComentario, pNombre})
    }


    return(
        <View style={{borderStyle:"solid", borderColor:"#F15623", borderWidth:10, padding:10}}>
            <Text style={{fontSize:30, fontWeight:"bold", color:"white"}}>
                        Nuevo Comentario
            </Text>
            <View>
                <TextInput style={{color:"gray"}} placeholderTextColor={"gray"} value={pelicula} onChangeText={setPelicula} placeholder="Nombre de la pelicula"></TextInput>
                <TextInput style={{color:"gray"}} placeholderTextColor={"gray"} value={usuario} onChangeText={setUsuario} placeholder="Nombre nuevo usuario"></TextInput>
                <TextInput style={{color:"gray"}} placeholderTextColor={"gray"} value={usuarioImg} onChangeText={setUsuarioImg} placeholder="Nueva imagen de usuario"></TextInput>
                <TextInput style={{color:"gray"}} placeholderTextColor={"gray"} value={usuarioCalificacion} onChangeText={setUsuarioCalificacion} placeholder="Tu calificacion" keyboardType="numeric"></TextInput>
                <TextInput style={{color:"gray"}} placeholderTextColor={"gray"} value={comentario} onChangeText={setComentario} placeholder="Colocar reseña"></TextInput>
            
                <TouchableOpacity style={botonStyles.container} onPress={agregarComentario}>
                    <Text style={botonStyles.text}>Nueva reseña</Text>
                </TouchableOpacity>
            </View>
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