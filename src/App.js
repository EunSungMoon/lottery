import './style/App.scss';
import Header from './Components/HeaderCom/Header';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className='App'>
      <div className='container-fluid'>
        <Header />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
