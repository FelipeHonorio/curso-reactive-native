import React from 'react'
import { View, StyleSheet } from 'react-native'

import CompDefault, { Comp1, Comp2 } from './components/Multi'
import Fist from './components/Fist'
import {MinMax} from './components/MinMax'

export default () => (
    <View style={style.App}>
        <MinMax min={10} max={20} />

        {/* <CompDefault />
        <Comp1 />
        <Comp2 />
        <Fist /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        //backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})