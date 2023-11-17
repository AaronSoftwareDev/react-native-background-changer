import React , {useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import {  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,

  View, } from 'react-native';


export default function App() {
  const [chooseBackground, setBackground] = useState("#ffffff");
  const colorGenerator = () =>{
    const range = "01233456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
      color += range[Math.floor(Math.random() * 16)]
    }
    setBackground(color)
  }
  return (
    <>
    <StatusBar backgroundColor={chooseBackground}/>
    <View style={[styles.container, {backgroundColor: chooseBackground}] }>
      <TouchableOpacity onPress={colorGenerator}>
        <View style={styles.Btn}>
          <Text style={styles.Txt}>Change Background </Text>
        </View>
      </TouchableOpacity> 
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  Btn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  Txt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
});
