import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {

  const [text, settext] = useState( 'prende' );

  const [text2, settext2] = useState( 'party' );

  const handler1 = () =>{
    const action = [ 'tocar', 'azotar', 'lamer', 'lamer', 'besar', 'besar', 'amasar','amasar','amasar', 'mordidita en' ];
    let rnd = Math.floor(Math.random() * action.length);
    let textAccion = action[rnd];
    return settext(textAccion);
  }

  const handler2= () =>{
    
    const lugar = [ 'nalgas','nalgas', 'pecho','pecho', 'entrepierna', 'entrepierna', 'cuello', 'orejas', 'boca'  ];
    let rnd2 = Math.floor(Math.random() * lugar.length);
    let textLugar = lugar[rnd2];
    return settext2(textLugar);
  }

  const handler= () =>{
    handler1();
    handler2();

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> desarrollado por jose padrino 2020 </Text>  
      <Text style={styles.txt}> {text} </Text>  
      <Text style={styles.txt2}> {text2} </Text>  


      <Button
        title='siguiente' 
        color='#e8514c'
        onPress={ handler }

        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    alignItems: 'center',    
    backgroundColor: '#ff8e8b',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  title:{
    backgroundColor: '#e8514c',
    color: '#9c3734',
    fontSize:10,
    height: 40, 
    paddingTop: 25,
    position: 'absolute',
    textAlign:'center',
    top: 0,
    width: '100%'

  },

  txt:{
    color: '#ffe0df',
    fontSize:45
  },

  txt2:{
    color: '#e8514c',
    fontSize:60,
    fontWeight:'bold',
    marginTop: 45,
    position: 'absolute'
  }

});

/*

() => {
            const action = [ 'tocar', 'azotar', 'lamer', 'besar', 'amasar', 'mordidita en' ];
            const lugar = [ 'nalgas', 'pecho'  ];
            let rnd = Math.floor(Math.random() * action.length);
            let rnd2 = Math.floor(Math.random() * lugar.length);
            let textAccion = action[rnd];
            let textLugar = lugar[rnd2];
            return settext(textAccion);

            } 

*/