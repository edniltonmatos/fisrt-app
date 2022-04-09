import React from 'react';
import { StyleSheet, Text, View, Image, Button,ScrollView } from 'react-native';


export default function Acesso() {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.containerDesc}>
      <Image source={require('../assets/img_acesso.png')}/>
      <View>
        <Text style={{paddingTop:90, fontSize:34, fontWeight:"bold"}}>olá, bem vindo</Text>  
        <Text style={{fontSize:14, paddingTop:8, textAlign:"center"}}>acesse com o github</Text>
      </View>
    </View>
      <View style={{paddingTop:24}}>
        <Button
        title="github"
        color="#B259B2"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#DCE5E4'
  },
  containerDesc:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    paddingTop:70
  }
});
