import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SearchResults from "./pages/searchresults/SearchResults";
import Hotel from "./pages/hotel/Hotel";
import NotFound from "./pages/notfound/NotFound";
import MainLayout from "./pages/layout/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/hotels/searchresults" element={<SearchResults />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
