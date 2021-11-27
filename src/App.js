import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


let HolaIndex = () => <p>Hola</p>

let NotImplemeted = () =>{
  return (
  <>
    <Link to="/videos">Ir a videos</Link>
    <h1>Esta página aún no esta lista</h1>
  </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HolaIndex />}></Route>
      </Routes>

      <Routes>
        <Route path="/" element={<NotImplemeted />}></Route>
        <Route path="/usuarios/registro" element={<NotImplemeted />}></Route>
        <Route path="/usuarios/login" element={<NotImplemeted />}></Route>
        <Route path="/usuarios/:id" element={<NotImplemeted />}></Route>
        <Route path="/usuarios/:id/videos" element={<NotImplemeted />}></Route>

        <Route path="/videos" element={<NotImplemeted />}></Route>
        <Route path="/videos/nuevo" element={<NotImplemeted />}></Route>
        <Route path="/videos/:id" element={<NotImplemeted />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
