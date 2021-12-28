import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate, useParams, useLocation } from 'react-router-dom'

import {
  Provider
} from 'react-redux'

import { store } from './store'
import SignIn from './users/SignIn'

let NotImplemeted = () =>{
  return (
  <>
    <Link to="/videos">Ir a videos</Link>
    <h1>Esta página aún no esta lista</h1>
  </>
  )
}

let Error404 = () =>{
  return (
  <>
    <Link to="/">Regresar al inicio</Link>
    <h1>Esta página no existe</h1>
  </>
  )
}


let VideoShow = () => {
  let { id } = useParams();
  let location = useLocation();
  // History API
  let queryParams = new URLSearchParams(location.search)
  for(let p of queryParams ) {
    console.log(p);
  };

  return (
    <>
      <p>{id}</p>
    </>
  )
}

let UsuariosOulet = () => {
  let navigate = useNavigate();

  let redirect = () => {
    navigate('/');
  }

  return (
    <>

      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}> {/*todos los Componentes que esten dentro de Provider tienen acceso al store */}
        <Routes>
          <Route path="/" element={<NotImplemeted />}></Route>
          
          <Route path="/usuarios" element={<UsuariosOulet />}>
            <Route path="registro" element={<NotImplemeted />}></Route>
            <Route path="login" element={<SignIn />}></Route>
            <Route path=":id" element={<NotImplemeted />}></Route>
            <Route path=":id/videos" element={<NotImplemeted />}></Route>
          </Route>

          <Route path = "videos">
            <Route path="" element={<NotImplemeted />}></Route>
            <Route path="nuevo" element={<NotImplemeted />}></Route>
            <Route path=":id" element={<VideoShow />}></Route>
          </Route>

          <Route path = "*" element={<Error404 />}></Route>

        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
