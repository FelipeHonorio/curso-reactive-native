import React from 'react'
import { View } from 'react-native'

import CompDefault, { Comp1, Comp2 } from './components/Multi'
import Fist from './components/Fist'

export default () => (
    <View>
        <CompDefault />
        <Comp1 />
        <Comp2 />
        <Fist />
    </View>
)
