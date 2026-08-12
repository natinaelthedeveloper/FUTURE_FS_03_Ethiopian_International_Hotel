import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Dining from "./pages/Dining";
import Facilities from "./pages/Facilities";
import Offers from "./pages/Offers";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/rooms" element={<Rooms />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Route>
    </Routes>
  );
}

export default App;