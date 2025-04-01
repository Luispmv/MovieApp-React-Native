import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainScreen from './src/screens/MainScreen';
import MovieCard from "./src/components/MovieCard"
import MainStack from "./src/navigation/MainStack"


export default function App() {
  return (
    // <MainScreen></MainScreen>
    <MainStack/>
  );
}
