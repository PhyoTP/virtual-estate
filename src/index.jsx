import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import Navigation from "./pages/Navigation";
import Block from "./pages/Block";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="name" element={<Block />} />
          <Route path="name/:name" element={<Block />} />
          <Route path=":level" element={<Navigation />} />
          <Route index element={<Navigation />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);