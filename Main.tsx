import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Navigation from './navigation/NativeStack'

const Main = () => {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    )
}

export default Main