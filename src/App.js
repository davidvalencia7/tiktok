import { BrowserRouter, Routes, Route } from 'react-router-dom'
let Hello = () =>{
  return <h1>Hola Mundo</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
