import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainContainer } from './components/MainContainer/MainContainer';
import { Ticket } from './components/Ticket/Ticket';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/sidebar' element={<Sidebar/>}/>
          <Route path='/' element={<MainContainer/>}>
            <Route path='home' element={<Home />} /> {/*works as main/home */}
            <Route path='ticket' element={<Ticket/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
