import React from 'react'
import Logo from './page/Logo/Logo'
import Menu from './page/Menu/Menu'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import MemoryOne from './page/MemoryOne/MemoryOne'
import MemoryTwo from './page/MemoryTwo/MemoryTwo'
import MemoryThree from './page/MemoryThree/MemoryThree'
import MemoryFour from './page/MemoryFour/MemoryFour'
import Gallery from './page/Gallery/Gallery'
import PeterParker from './page/PeterParker/PeterParker'


function App() {
  const router = createBrowserRouter ( [ 
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          index : true ,
          element : <Logo />
        },
        {
          path : "menu",
          element : <Menu />
        },
        {
          path : "memoryone",
          element : <MemoryOne />
        },
        {
          path : "memorytwo",
          element : <MemoryTwo />
        },
        {
          path : "memorythree",
          element : <MemoryThree />
        },
        {
          path : "memoryfour",
          element : <MemoryFour />
        },
        {
          path : "gallery",
          element : <Gallery />
        },
        {
          path : "peterparker",
          element : <PeterParker />
        },

      ]
    }
  ])
  return (
    <>
    <div>
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App