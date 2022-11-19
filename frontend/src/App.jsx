import { useState } from 'react'
import './App.css'
import SignIn from './auth/SignIn'
import SignUp from './auth/SingUp'
import MainView from './app/MainView'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import { Box } from '@mui/material'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainView />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  }

])

function App () {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minWidth="100vw"
    >
        <RouterProvider router={router} />
    </Box>
  )
}

export default App
