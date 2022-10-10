import { Component } from "react";
import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";

import moment from 'moment'
import 'moment/locale/pt-br'
import Estilos from './src/Estilos'

import Tarefa from "./src/components/Tarefa";



export default class App extends Component {
  state = {
    tarefas:[{
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: new Date(),
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: null,
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: new Date(),
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: null,
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: new Date(),
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: null,
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: new Date(),
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: null,
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: new Date(),
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: null,
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: new Date(),
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: null,
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: new Date(),
    },
    {
      id: Math.random(),
      desc: "comprar curso",
      dataEst: new Date(),
      dataCon: null,
    },
  ]
  }


    render(){
      const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
      return(
        <View style={styles.container} >
          <View style={styles.header}>
            <View style={styles.titleBar}>
              <Text style={styles.title}>Hoje</Text>
              <Text style={styles.subtitle}>{today}</Text>
            </View>  
          </View>
          <View style={styles.lista}>
          <FlatList data={this.state.tarefas} 
            keyExtractor={item=> `${item.id}`}
            renderItem={({item}) => <Tarefa {...item} /> }/>
             
          </View>
        </View>
    )}
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
      flex: 1
    },
    lista:{
      flex: 7
    },
    titleBar:{
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'red'
    },
    title:{
      fontFamily: Estilos.fontFamily,
      fontSize: 50,
      color: Estilos.colors.secundaria,
      marginLeft: 20,
    },
    subtitle:{
      fontFamily: Estilos.fontFamily,
      fontSize: 20,
      color: Estilos.colors.secundaria,
      marginLeft: 20,
    }

 
});