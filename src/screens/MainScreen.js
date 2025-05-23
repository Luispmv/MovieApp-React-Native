import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import MovieCard from '../components/MovieCard';
// import logo from './assets/iconlogo.png'; 
import logo from "../../assets/iconlogo.png";
// import { peliculas } from '../data';
import BtnCrud from '../components/BtnCrud';

export default function MainScreen({peliculas}){
    return (
        <ScrollView style={styles.mainView}>
    
          <Image source={logo} style={styles.logo}></Image>
          <BtnCrud texto={"CRUD"} destino={"CrudScreen"}></BtnCrud>
          <View style={styles.container}>
          {peliculas?.map((movie) => {
            return <MovieCard 
              key={movie.id} 
              id={movie.id} 
              imagensrc={movie.image} 
              title={movie.title}
              peliculas={peliculas}
            />;
          })}
          </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    mainView:{
      backgroundColor:"black",
      display:"flex"
    },
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor:"black",
      marginTop: 30
    },
    logo:{
      alignSelf:"center",
      marginTop:30
    }
  });
  