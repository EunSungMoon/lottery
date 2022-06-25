import './style/App.scss';
import Header from './Components/HeaderCom/Header';
import MainPage from './Pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './Pages/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='container-fluid'>
          <Routes>
            <Route exact path='/' element={
              <><Header /><MainPage /></>
            }>

            </Route>
            <Route path='*' element={<EmptyPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
