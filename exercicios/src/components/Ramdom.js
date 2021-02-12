import React from 'react'
import { Text } from 'react-native'
import Style from './style'

export const Ramdom = ({max, min}) => {
    const ramdomNumber = parseInt(Math.random() * (max - min) + min);
    return (
        <Text style={Style.fontLarge}>this number [{ramdomNumber}] its between {min} and {max}</Text>
    )
}