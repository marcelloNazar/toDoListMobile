import React, {Component} from "react";
import { Modal, View, StyleSheet, TouchableWithoutFeedback, Text, TouchableOpacity, TextInput, } from "react-native";
import Estilos from "../Estilos";

const estadoInicial = { desc: ''}

export default class AddTarefa extends Component{

    state = {
        ...estadoInicial
    }


    render(){
        return(
            <Modal transparent={true} 
            visible={this.props.visible} 
            onRequestClose={this.props.onCancel} 
            animationType='slide'
            >
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Add tarefa</Text>
                    <TextInput style={styles.imput}
                    placeholder="Informe a Descrição..."
                    value={this.state.desc}
                    onChangeText={desc=> this.setState({desc})}
                    />
                    <View style={styles.botoes}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.botao}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.botao}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container:{
        backgroundColor: '#FFF'
    },
    header:{
        fontFamily: Estilos.fontFamily,
        backgroundColor: Estilos.colors.hoje,
        color: Estilos.colors.secundaria,
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
    },
    imput:{
        fontFamily: Estilos.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor:'#E3E3E3',
        borderRadius: 6,
        
    },
    botoes:{
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    botao:{
        margin: 20,
        marginRight: 30,
        color: Estilos.colors.hoje
    },
})