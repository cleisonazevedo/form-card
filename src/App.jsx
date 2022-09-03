import { Route, Routes } from "react-router-dom";
import CredCard from "./templates/CredCard";

function App() {
  return (
    <Routes>
      <Route path="/sample1" element={<CredCard />} />
    </Routes>
  );
};

export default App;
