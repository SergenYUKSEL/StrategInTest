import { Register } from './register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './login'
import { Home } from './home'
import { Header } from './header'
import { List } from './list'
import { Logout } from './logout'

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/register" element={<Register/>}>
          </Route>
          <Route path="/users" element={<List/>}>
          </Route>
          <Route path="/logout" element={<Logout/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
