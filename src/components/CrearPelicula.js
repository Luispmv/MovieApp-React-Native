import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import { useState } from "react";


export default function CrearPelicula({funcion}){
    
    // Uso del estado
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [year, setYear] = useState("")
    const [calification, setCalification] = useState("")
    const [sinopsis, setSinopsis] = useState("")
    const [clasificación, setClasificacion] = useState("")


    const agregarPelicula = () =>{
        const nuevaPelicula = {
            id: Date.now(),
            title,
            image,
            category,
            year,
            calification,
            sinopsis,
            clasificación,
            reseña: []
        }
    
        funcion(nuevaPelicula)
    }

    return (
        <View style={{borderStyle:"solid", borderColor:"#F15623", borderWidth:5, padding: 10}}>
            <Text style={{fontSize:30, fontWeight:"bold", color:"white"}}>
                Nueva Pelicula
            </Text>
            <View>
                <TextInput placeholderTextColor={"gray"} value={title} onChangeText={setTitle} placeholder="Titulo de la pelicula"></TextInput>
                <TextInput placeholderTextColor={"gray"} value={image} onChangeText={setImage} placeholder="Poster de la pelicula"></TextInput>
                <TextInput placeholderTextColor={"gray"} value={category} onChangeText={setCategory} placeholder="Categoria de la pelicula"></TextInput>
                <TextInput placeholderTextColor={"gray"} value={year} onChangeText={setYear} keyboardType="numeric" placeholder="Año de la pelicula"></TextInput>
                <TextInput placeholderTextColor={"gray"} value={calification} onChangeText={setCalification} keyboardType="numeric" placeholder="Coloca Calificacion"></TextInput>
                <TextInput placeholderTextColor={"gray"} value={sinopsis} onChangeText={setSinopsis} placeholder="Sinopsis de la pelicula"></TextInput>
                <TextInput placeholderTextColor={"gray"} value={clasificación} onChangeText={setClasificacion} placeholder="Clasificacion de la pelicula"></TextInput>
                <TouchableOpacity style={botonStyles.container} onPress={agregarPelicula}>
                    <Text style={botonStyles.text}>Crear nueva pelicula</Text>
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