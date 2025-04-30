import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"


export default function ActualizarPelicula({funcion}){

    const [nombre, setNombre] = useState("")

    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [calification, setCalification] = useState("")
    const [sinopsis, setSinopsis] = useState("")
 

    const encontrarPelicula = ()=>{
        const pNombre = nombre
        const pImagen = image
        const pCategory = category
        const pcalificacion = calification
        const psinopsis = sinopsis
        const resultado = funcion(pNombre, pImagen, pCategory, pcalificacion, psinopsis)
        if(resultado){
            console.log(resultado)
        }
    }

    
    return(
        <View style={{borderStyle:"solid", borderColor:"#F15623", borderWidth:5, padding:10}}>
            <Text style={{fontSize:30, fontWeight:"bold", color: "white"}}>
                Actualizar Pelicula
            </Text>
            <View>

                <TextInput placeholderTextColor={"gray"} value={nombre} onChangeText={setNombre} placeholder="Coloca la pelicula que quieres actualizar"></TextInput>

                <TextInput placeholderTextColor={"gray"} value={image} onChangeText={setImage} placeholder="Nuevo Poster"></TextInput>
                <TextInput placeholderTextColor={"gray"} value={category} onChangeText={setCategory} placeholder="Nueva Categoria"></TextInput>
                <TextInput placeholderTextColor={"gray"} value={calification} onChangeText={setCalification} placeholder="Nueva Calificacion"></TextInput>
                <TextInput placeholderTextColor={"gray"} value={sinopsis} onChangeText={setSinopsis} placeholder="Nueva sinopsis"></TextInput>

                <TouchableOpacity style={botonStyles.container} onPress={encontrarPelicula}>
                    <Text style={botonStyles.text}>Actualizar</Text>    
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