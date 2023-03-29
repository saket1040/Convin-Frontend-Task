import { Route, Routes } from 'react-router-dom';
import HistoryCard from './components/HistoryCard';
import MainPage from './components/MainPage';
import NavbarComp from './components/NavbarComp';
import { ContextProvider } from './context/ContextProvider';


function App() {
  return (
      <ContextProvider>
        <NavbarComp/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/history' element={<HistoryCard />} />
      </Routes>
      </ContextProvider>
  );
}

export default App;
