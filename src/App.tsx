import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import DashboardLayout from "@/layouts/DashboardLayout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
