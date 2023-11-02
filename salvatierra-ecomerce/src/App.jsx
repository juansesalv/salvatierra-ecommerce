import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos, esta es la primer preentrega'}/>}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App