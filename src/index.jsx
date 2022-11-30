import React from "react";
import  ReactDOM  from "react-dom/client";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";
// import { CallBack } from "./06-memos/CallBack";
//import { TodoApp } from "./08-reducer/TodoApp";
// import { MemoHook } from "./06-memos/MemoHook";
// import { Memorize } from "./06-memos/Memorize";
// import { Layout } from "./05-useLayout/Layout";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { SimpleForm } from "./01-useEfect/SimpleForm";
// import { FormCustomHook } from "./01-useEfect/SimpleFormwithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { CounterWithCustumHook } from "./01-useState/CounterWithCustumHook";
// import { CounterApp } from "./01-useState/CounterApp";
// import { AppIndex } from "./App";

// import './08-reducer/intro-reducer';


import './index.css';

ReactDOM.createRoot(document.querySelector('#main')).render(
    
    <BrowserRouter>
        < MainApp/>
    </BrowserRouter>
  
)
