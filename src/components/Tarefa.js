import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Estilos from "../Estilos";


export default props =>{

    const doneOrNot = props.dataCon != null ?{textDecorationLine: 'line-through'} : {}

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {checkView(props.dataCon)}
            </View>
            <View>
                <Text style={[styles.desc, doneOrNot ]}>{props.desc}</Text>
                <Text>{props.dataEst + ""}</Text>
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
        height: 25,
        width:25,
        borderRadius:13,
        borderWidth:1,
        borderColor: '#555',
    
    },
    concluido:{
        height: 25,
        width:25,
        borderRadius:13,
        borderColor: '#4d7031',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    desc:{
        fontFamily: Estilos.fontFamily,
        color: Estilos.colors.mainText,
        fontSize: 15,
    }
})