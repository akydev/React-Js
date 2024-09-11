import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import { Product } from './Product'
import Registration from './Registration'
import Counter from './Counter'

function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/product' element={<Product />} />
          <Route path='/counter' element={<Counter />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
