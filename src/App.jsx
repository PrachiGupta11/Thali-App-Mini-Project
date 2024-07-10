import './App.css'
import Thali from './components/Thali'
import store from './Store/store'
import {Provider} from 'react-redux';
import {createBrowserRouter,BrowserRouter,Route,Routes} from 'react-router-dom';
import Checkout from './components/Checkout';

export default function App() {
  return (
  <Provider store={store}>
   <div>
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Thali/>}/>
         <Route path='/Checkout' element={<Checkout/>}/>
           
         </Routes>
     </BrowserRouter>
   </div>
  </Provider>
  )
}
