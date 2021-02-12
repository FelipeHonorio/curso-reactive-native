import React from 'react'
import { View, Text } from 'react-native'
import Style from './style'

export default props => {
    return (
        <>
            <Text style={Style.fontLarge}>{props.primary}</Text>
            <Text>{props.secundary}</Text>
        </>
    )
}