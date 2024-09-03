import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom"
import Signup from "./components/Signup/Signup";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<Signup />} />
        </Routes>
      </div>
  );
}

export default App;
