import { NavigationContainer } from '@react-navigation/native'
import AppRouter from './src/routes'
import React from 'react'

export default function App() {
  return (
    <NavigationContainer>
      <AppRouter/>
    </NavigationContainer>
  )
}