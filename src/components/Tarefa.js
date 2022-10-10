import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Estilos from "../Estilos";
import moment from "moment";
import 'moment/locale/pt-br'

export default props =>{

    const doneOrNot = props.dataCon != null ?{textDecorationLine: 'line-through'} : {}

    const data = props.dataCon ? props.dataCon : props.dataEst
    const dataFormatada = moment(data).locale('pt-br').format('ddd,  D [de] MMMM')

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {checkView(props.dataCon)}
            </View>
            <View>
                <Text style={[styles.desc, doneOrNot ]}>{props.desc}</Text>
                <Text style={styles.data}>{dataFormatada}</Text>
            </View>
        </View>
    )
}

function checkView(dataCon){
    if(dataCon != null ){
        return(
            <View style={styles.concluido}>
            
            </View>
        ) 
    }else{
        return(
            <View style={styles.pendente}></View>
        )  
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    checkContainer:{
        width: '15%',
        alignItems:'center'
    },
    pendente:{
        height: 20,
        width:20,
        borderRadius:10,
        borderWidth:1,
        borderColor: '#555',
    
    },
    concluido:{
        height: 20,
        width:20,
        borderRadius:10,
        backgroundColor: '#555',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    desc:{
        fontFamily: Estilos.fontFamily,
        color: Estilos.colors.mainText,
        fontSize: 15,
    },
    data:{
        fontFamily: Estilos.fontFamily,
        color: Estilos.colors.subText,
        fontSize: 10,
    }
})