import React from 'react'
import { Text } from 'react-native'
import Style from './style'

export const Ramdom = props => {
    const ramdomNumber = Math.random() * (props.max - props.min) + props.min;
    return (
    <Text style={Style.fontLarge}>this number [{ramdomNumber}] its between {props.min} and {props.max}</Text>
    )
}