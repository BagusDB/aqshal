import List from "./component/list";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>}/>
        {/* <Route path="add" element={<AddUser/>}/> */}
        {/* <Route path="edit/:id" element={<EditUser/>}/> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
