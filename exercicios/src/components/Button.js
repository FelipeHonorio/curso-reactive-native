import React from 'react'
import { Button } from 'react-native'

export default (props) => {

    function exec() {
        console.warn('Exec!!!')
    }
    
    return (
        <>
            <Button 
                title="Execute!"
                onPress={exec}
            />
        </>
    )
}