import React, {Component} from "react"
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native"


export default class CustomButton extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <TouchableOpacity>
                <Image source={require('../img/kakao_login_medium_narrow.png')}/>
            </TouchableOpacity>
        )
    }
}