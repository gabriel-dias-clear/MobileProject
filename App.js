import {Component} from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class App extends Component {
  render(){
    let name = 'Estevão Trabalhos'
    return(
      <View style={styles.container}>
        <Text style={{ color: 'red', fontSize:30}}>
          Sujeito Programador
        </Text>

        <Image
          source={{ uri:'https://sujeitoprogramador.com/steve.png' }}
          style={{width:250, height:250}}
        />
        <Text style={{width:'100', textAlign:'center', fontSize:50, color: 'red'}}>
          {name}
        </Text>
      </View>

    )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#CAD8E1",
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

  export default App;