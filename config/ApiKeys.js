import React from 'react';
import {StyleSheet, View, Text, } from 'react-native';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return (
            <Text style={styles.Login}>hi</Text>
        );
    }
}
const styles=StyleSheet.create({

});