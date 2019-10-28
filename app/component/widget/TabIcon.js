import React, { Component } from "react";
import * as Constant from '../../util/constant';
import {View, Text} from 'react-native';
import styles from '../../style'
import Icon from 'react-native-vector-icons/Feather'


export default class TabIcon extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let color = this.props.focused ? Constant.tabSelectedColor : Constant.tabUnSelectColor;
        let iconPath = this.props.tabIconName;

        return (
            <View style={styles.centered}>
                <Icon name={iconPath} size={Constant.tabIconSize} color={color} />
                <Text style={[{color: color}, {fontSize: Constant.smallTextSize}]}>{this.props.title}</Text>
            </View>
        )
    }
}