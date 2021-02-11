import React from 'react'
import { View, StyleSheet } from 'react-native'

import CompDefault, { Comp1, Comp2 } from './components/Multi'
import Fist from './components/Fist'

export default () => (
    <View style={style.App}>
        <CompDefault />
        <Comp1 />
        <Comp2 />
        <Fist />
    </View>
)

const style = StyleSheet.create({
    App: {
        //backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})