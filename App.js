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
          <Jobs largura={400} altura={400}/> 
        <Text style={{width:'100', textAlign:'center', fontSize:50, color: 'red'}}>
          {name}
        </Text>
      </View>

    )
    }
  }

export default App;


class Jobs extends Component{
    render(){
      return(
          <Image
            source={{ uri:'https://sujeitoprogramador.com/steve.png' }}
            style={{width:this.props.largura, height:this.props.altura}}
          />
      );
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
