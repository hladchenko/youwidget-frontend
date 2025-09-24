import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/pages/Home.tsx";
import Widgets from "@pages/Widgets.tsx";
import DashboardLayout from "@/layouts/DashboardLayout.tsx";
import About from "@/pages/About.tsx";
import NotFound from "@/pages/NotFound.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<DashboardLayout />}>
            <Route path="/widgets" element={<Widgets />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
