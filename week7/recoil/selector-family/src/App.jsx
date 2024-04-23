
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Intro } from './pages/Intro';
import { useState } from 'react';

function App() {
  const [val,setval] = useState("");
  return <>
    <BrowserRouter>
      <input type="text" name="" value={val} placeholder='Enter todoId' id="" onChange={(e)=>setval(e.target.value)}/>
      <Link to={`/todos/${val}`}>
        <button>Submit</button>
      </Link>
      <Routes>
        <Route path={`/todos/:id`} element={<Intro/>}/>
      </Routes>
    </BrowserRouter>
  </>
}



export default App
