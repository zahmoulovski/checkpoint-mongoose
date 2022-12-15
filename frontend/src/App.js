import './App.css'
import NavBar from './components/NavBar'
import Add from './components/Add'
import ListContact from './components/ListContacts'
import Update from './components/Update'
import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacts' element={<ListContact/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
