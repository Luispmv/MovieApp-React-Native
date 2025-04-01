import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import MovieCard from '../components/MovieCard';
// import logo from './assets/iconlogo.png'; 
import logo from "../../assets/iconlogo.png";
import { peliculas } from '../data';

export default function MainScreen(){
    return (
        <ScrollView style={styles.mainView}>
    
          <Image source={logo} style={styles.logo}></Image>
          <View style={styles.container}>
          {peliculas.map((movie) => {
            console.log(movie);
            return <MovieCard id={movie.id} imagensrc={movie.image} title={movie.title} />;
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
  