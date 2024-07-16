import { useState } from 'react'


import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import Layout from './Layout'
import Context from './pages/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        
        <Route index element ={<IndexPage/>} />
        <Route path="contact/" element={<Context/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
