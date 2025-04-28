import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"


export default function EliminarPelicula({funcion}){

    const [nombre, setNombre] = useState("")
   
    const eliminarPelicula = ()=>{
        const pelicula = nombre
        funcion(pelicula)
    }


    return(
        <View>
            <Text style={{fontSize:30, fontWeight:"bold"}}>
                Eliminar Pelicula
            </Text>
            <View>

                <TextInput value={nombre} onChangeText={setNombre} placeholder="Coloca la pelicula que quieres eliminar"></TextInput>

                <TouchableOpacity style={botonStyles.container} onPress={eliminarPelicula}>
                    <Text style={botonStyles.text}>Eliminar </Text>    
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