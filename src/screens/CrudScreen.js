import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BtnBack from "../components/BtnBack";
import MainScreen from "./MainScreen";
import { useState } from "react";


export default function CrudScreen({CrearFuncion}){
    return(
        <View>
            <BtnBack destino={MainScreen}></BtnBack>

            <View style={formContainer.container}>
            <CrearPelicula funcion={CrearFuncion}></CrearPelicula>
            </View>
        </View>
    )
}

// Estilos para el contenedor de los formularios CRUD
const formContainer = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginTop: 90,
        marginRight: 30
    }
})

function CrearPelicula({funcion}){
    
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
            id,
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
        <View styles>
            <Text style={{fontSize:30, fontWeight:"bold"}}>
                Nueva Pelicula
            </Text>
            <View>
                <TextInput value={title} onChangeText={setTitle} placeholder="Titulo de la pelicula"></TextInput>
                <TextInput value={image} onChangeText={setImage} placeholder="Poster de la pelicula"></TextInput>
                <TextInput value={category} onChangeText={setCategory} placeholder="Categoria de la pelicula"></TextInput>
                <TextInput value={year} onChangeText={setYear} keyboardType="numeric" placeholder="Año de la pelicula"></TextInput>
                <TextInput value={calification} onChangeText={setCalification} keyboardType="numeric" placeholder="Coloca Calificacion"></TextInput>
                <TextInput value={sinopsis} onChangeText={setSinopsis} placeholder="Sinopsis de la pelicula"></TextInput>
                <TextInput value={clasificación} onChangeText={setClasificacion} placeholder="Clasificacion de la pelicula"></TextInput>
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
        textAlign:"center"
    }
})