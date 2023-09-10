import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Detail from './views/detail/Detail';


function App() {  
  return (
    
      <div>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='detail/:id' element={<Detail/>}/>
      </Routes> 


      </div>
  )
}

export default App
