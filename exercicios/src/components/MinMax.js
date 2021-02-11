import React from 'react'
import { Text } from 'react-native'
import Style from './style'

export const MinMax = (props) => (
    <Text style={Style.fontLarge}>
        O valor {props.max} é maior que o valor {props.min}
    </Text>
)
