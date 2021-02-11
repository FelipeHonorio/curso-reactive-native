import React from 'react'
import { Text } from 'react-native'
import Style from './style'

function Comp() {
    return <Text style={Style.fontLarge}>Comp #Oficial</Text>
}

function Comp1() {
    return <Text style={Style.fontLarge}>Comp #01</Text>
}

function Comp2() {
    return <Text style={Style.fontLarge}>Com #2</Text>
}

export { Comp1, Comp2 }
export default Comp