import StateOne from "./Components/StateOne";
import Form from "./Components/Form";
import TablePage from "./Components/Table";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
   <Router>
    <Routes path="/">
      <Route index element={<Form />} />
      <Route path="/stateOne" element={<StateOne />} />
      <Route path='/table' element={<TablePage />} />
    </Routes>
   </Router>
  );
}

export default App;
