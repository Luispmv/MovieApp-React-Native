import { StyleSheet, Text, View } from "react-native";
import BtnBack from "../components/BtnBack";
import MainScreen from "./MainScreen";


export default function CrudScreen(){
    return(
        <View>
            <BtnBack destino={MainScreen}></BtnBack>

        </View>
    )
}