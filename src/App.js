import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainContainer } from './components/MainContainer/MainContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/sidebar' element={<Sidebar/>}/>
          <Route path='/' element={<MainContainer/>}>
            <Route path='home' element={<Home />} /> {/*works as main/home */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
