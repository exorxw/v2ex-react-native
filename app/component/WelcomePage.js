import React, { Component } from "react";
import { View, StatusBar, Image } from 'react-native';
import styles, { screenWidth, screenHeight } from '../style/index'
import * as Constant from "../util/constant"
import { Actions } from "react-native-router-flux";

export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.showMainPage();
    }

    showMainPage() {
        setTimeout(() => {
            Actions.reset('root');
        }, 3000);
    }

    render () {
        return (
            <View style={[styles.mainBox, {backgroundColor: Constant.white}]}>
                <StatusBar hidden={true}/>
                <View style={[styles.centered, {flex: 1}]}>
                    <Image source={require('../asset/welcome.png')} 
                            resizeMode={'contain'} 
                            style={[{width: screenWidth, height: screenHeight}]} />
                </View>
            </View>
        )
    }
}