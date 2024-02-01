import React,{useEffect,useState} from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import config from "./config/config";
import TodoList from "./components/todoList";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () =>{
   return(
    <BrowserRouter>
    <Routes>
        <Route path={`${config.baseUrl}`} element={<TodoList/>}/>
    </Routes>
</BrowserRouter>
   )
}
export default App;