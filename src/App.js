import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ReviewList from "./components/ReviewList";
import Review from "./components/Review";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="/reviews/category/:category" element={<ReviewList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
