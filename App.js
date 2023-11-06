import React, {Component, useState, useEffect} from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function App(){

  const [pathImage, setPathImage] = useState(require('./img/biscoito.png'))
  const array = ['Dia Bonito', 'Opa que legal', 'Caramba que top', 'Genial em', 'Ulalau']
  const [frase, setFrase] = useState('Clique e sorteie uma frase')
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function HandleButton(){
    
      let aletoricNumber = getRandomInt(0, array.length)
      setPathImage(require('./img/biscoitoAberto.png'))
      setFrase(array[aletoricNumber])
    
  }

    return(
      <View style={styles.container}>
        <Image
          source={pathImage}
          style={styles.imageBisc}
        />

        <Text style={styles.text}>{frase}</Text>
        <TouchableOpacity onPress={HandleButton} style={styles.btn}>
          <View>
            <Text style={styles.textBtn}>
              Clique aqui!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )

}

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#9E6606",
      alignItems: 'center',
      justifyContent: 'center'
    },
    imageBisc:{
      width:330,
      height:280,
      marginBottom:25
    },
    text:{
      fontSize:25,
      color:'white',
      fontStyle: 'italic'
    },
    btn:{
      backgroundColor:'green',
      padding:10,
      marginTop:8
    },
    textBtn:{
      color:'white'
    }
  });

