import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'


let NotImplemeted = () =>{
  return (
  <>
    <Link to="/videos">Ir a videos</Link>
    <h1>Esta página aún no esta lista</h1>
  </>
  )
}

let UsuariosOulet = () => {
  return (
    <>
      <p>Hola desde usuario</p>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotImplemeted />}></Route>
        
        <Route path="/usuarios" element={<UsuariosOulet />}>
          <Route path="registro" element={<NotImplemeted />}></Route>
          <Route path="login" element={<NotImplemeted />}></Route>
          <Route path=":id" element={<NotImplemeted />}></Route>
          <Route path=":id/videos" element={<NotImplemeted />}></Route>
        </Route>

        <Route path = "videos">
          <Route path="" element={<NotImplemeted />}></Route>
          <Route path="nuevo" element={<NotImplemeted />}></Route>
          <Route path=":id" element={<NotImplemeted />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
