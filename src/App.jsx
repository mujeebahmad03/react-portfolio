import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { About, Contact, Home, Services, Testimonial, Work } from "./pages";
import "./App.css";

const App = () => {
  return (
    <main
      className={
        "page bg-site text-white bg-cover bg-no-repeat font-sora relative overflow-y-auto"
      }
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </main>
  );
};

export default App;
