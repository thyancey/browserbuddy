import { Route, Routes } from 'react-router-dom';
import { About } from './about';
import { Main } from './main';

export const App = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Main />} />
    </Routes>
  )
};
