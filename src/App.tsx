import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import DashboardLayout from "@/layouts/DashboardLayout.tsx";
import About from "@/pages/About.tsx";
import NotFound from "@/pages/NotFound.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
