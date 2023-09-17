import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Form from './views/form/form';


function App() {  
  return (
    
      <div>
        
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='detail/:id' element={<Detail/>}/>
       <Route path="/sell" element={<Form />} />
      </Routes> 


      </div>
  )
}

export default App
