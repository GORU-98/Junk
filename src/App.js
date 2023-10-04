import Navbar from './components/Navbar';
import Home from './components/Home';
// import Prize from './components/Prize';
import ExpenseCard from './components/ExpenseCard';
import SignIn from './components/SignIn';
import './Style/app.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>

<Routes>
    <Route path='/signin' element={  <SignIn/>}/>
   
  <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>}/>
    {/* <Route path='/' element={<Prize/>}/> */}
    <Route path='/getcard' element={ <ExpenseCard/>}/>
  </Route>
</Routes>

    </BrowserRouter>



   
   
   
   

    </>

  );
}

export default App;
