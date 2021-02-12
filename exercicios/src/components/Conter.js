import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Style from './style'

export default ({init = 0, step = 1}) => {
    const [value, setValue] = useState(init)


    const inc = () => setValue(value + step)
    const sub = () => setValue(value - step)

    return (
        <>
            <Text style={Style.fontLarge}>{value}</Text>
            <Button title="+" onPress={inc}/>
            <Button  title="-" onPress={sub}/>
        </>
    )
}