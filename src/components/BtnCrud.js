
import { useNavigation } from "@react-navigation/native";
import { Touchable, TouchableOpacity } from "react-native";
import { StyleSheet, Text } from "react-native";

export default function BtnCrud({destino, texto}){
    const navegacion = useNavigation()
    return(
        <TouchableOpacity
            style={estilos.contenedor}
            onPress={()=>{
                navegacion.navigate(destino)
            }}
        >
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    contenedor:{
        width: 150,
        height: 50,
        backgroundColor:"#F15623",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    },
    texto: {
        fontSize: 15,
        textAlign:"center",
        fontWeight:"bold"
    }
})