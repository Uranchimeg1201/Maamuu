import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {AntDesign} from '@expo/vector-icons';



export default function Header({navigation}) {

    const OpenMenu = () => {
        navigation.openDrawer()
    }

    return (
          
        <View style={styles.header}>
            <AntDesign name ="bars" size ={28} onPress={OpenMenu} style={styles.ikon} />
            <View>
                <Text style={styles.headertext}>Маамуу</Text>
                 <View>
                    <Image style={styles.image}
                    resource = {require('../assets/logo/kids2.png')} />
                 </View>
            </View>

    
        </View>
    )
    }

    const styles = StyleSheet.create({
        header:{
        
            width: '100%',
            height:'100%',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent: 'center',
            backgroundColor:'#D6EAF8',

        },
        headertext: {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#333',
            letterSpacing:1,
        },
        ikon:{
            position: 'absolute',
            left: 16
        },
        image:{

        

        }
    });



