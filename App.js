import { Component } from "react";
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform, Alert  } from "react-native";

import moment from 'moment'
import 'moment/locale/pt-br'
import Estilos from './src/Estilos'
import AddTarefa from "./src/telas/AddTarefa";

import Tarefa from "./src/components/Tarefa";



export default class App extends Component {
  state = {
    mostrarConcluidas: true,
    mostrarModal: false,
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
  ]
  }

  filtrarTarefas=()=>{
    this.setState({mostrarConcluidas: !this.state.mostrarConcluidas})
  }
  
  tarefaConc = tarefaId=>{
    const tarefas = [...this.state.tarefas]
    tarefas.forEach(tarefa=>{
      if(tarefa.id === tarefaId){
        tarefa.dataCon = tarefa.dataCon ? null : new Date()
      }
    })

    this.setState({tarefas})
  }


    addTask = newTask => {
      if(!newTask.desc || !newTask.desc.trim()){
        Alert.alert('Dados Inválidos', 'Descrição não informada!')
        return
      }

      const tarefas = [...this.state.tarefas]
      tarefas.push({
        id: Math.random(),
        desc: newTask.desc,
        dataEst: newTask.Date,
        dataCon: null
      })
      this.setState({tarefas, mostrarModal: false })
    }

    render(){
      const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
      return(
        <View style={styles.container} >
          <AddTarefa visible={this.state.mostrarModal}
          onCancel={()=> this.setState({mostrarModal: false})}
          onSave={this.addTask}/>
          <View style={styles.header}>
            <View style={styles.iconBar}>
              <TouchableOpacity  onPress={this.filtrarTarefas}>
               
              </TouchableOpacity>
            </View>
            <View style={styles.titleBar}>
              <Text style={styles.title}>Hoje</Text>
              <Text style={styles.subtitle}>{today}</Text>
            </View>  
          </View>
          <View style={styles.lista}>
          <FlatList data={this.state.tarefas} 
            keyExtractor={item=> `${item.id}`}
            renderItem={({item}) => <Tarefa {...item} tarefaConc={this.tarefaConc}/> }/>
             
          </View>
          <TouchableOpacity style={styles.addButton}
          onPress={()=> this.setState({mostrarModal: true})}
          activeOpacity={0.7}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
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
    },
    iconBar:{
      flexDirection: 'row'
    },
    addButton:{
      position: 'absolute',
      right: 30,
      bottom: 30,
      width: 50,
      height: 50,
      borderRadius:25,
      backgroundColor: Estilos.colors.hoje,
      alignItems: "center",
      justifyContent: "center"
      },
      addButtonText:{
        fontSize:35,
        color: Estilos.colors.secundaria
      }
 
});