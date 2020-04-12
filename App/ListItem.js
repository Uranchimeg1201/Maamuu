import React, { Component } from 'react';
import Animated from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';


export default class ListItem extends Component{
    state ={
        animatePress : new Animated.Value(1)
    }

    animateIn(){
        Animated.timing(this.state.animatePress, {
            toValue : 0.8,
            duration : 200
        
        }).start()
    }
    animateOut(){

        Animated.timing(this.state.animatePress, {
            toValue : 1,
            duration : 200
        
        }).start()

    }

    render()     {
        return (
            <TouchableWithoutFeedback

            onPressIn={() => this.animateIn()}
            onPressOut ={() => this.animateOut()}
            >
                <Animate.View style={{
                    margin : 5, 
                    transform :[
                        {
                        scale: this.state.animatePress
                        }
                    ]
                }}></Animate.View>
                <Image style ={{width:200 , height: 100 }} source ={this.props.Image}></Image>
            </TouchableWithoutFeedback>
        )
    }
}