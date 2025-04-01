import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import MovieCard from './src/components/MovieCard';
import logo from "./assets/iconlogo.png"


export default function App() {
  return (
    <ScrollView style={styles.mainView}>

      <Image source={logo} style={styles.logo}></Image>
      <View style={styles.container}>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
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
