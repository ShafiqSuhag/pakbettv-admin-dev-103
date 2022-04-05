import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBlog from './Pages/AddBlog';
import Dashboard from './Pages/Dashboard';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Subpage1 from './Pages/Subpage1';
import SubPage2 from './Pages/SubPage2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path='add-blog' element={<AddBlog />} />
            <Route path="page-1" element={<Page1 />}
            />
            <Route path="page-2" element={<Page2 />} />
            <Route path="page-1/subpage1" element={<Subpage1 />} />
            <Route path="page-2/subpage2" element={<SubPage2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
