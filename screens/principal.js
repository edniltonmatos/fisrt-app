import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

import Topbar from '../components/topbar'

export default function Teste() {
  return (
        <View style={styles.container}>
            <Topbar/>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCE5E4',
    alignItems:"center",
    justifyContent: 'space-between',
  },
});
