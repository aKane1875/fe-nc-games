import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ReviewList from "./components/ReviewList";
import Review from "./components/Review";
import PostComment from "./components/PostComment";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<ReviewList />} />
            <Route path="/reviews" element={<ReviewList />} />
            <Route path="/reviews/:review_id" element={<Review />} />
            <Route
              path="/reviews/category/:category"
              element={<ReviewList />}
            />
            <Route
              path="/reviews/:review_id/post_comment"
              element={<PostComment />}
            />
            {/* <Route
              path="/reviews/:review_id/comments"
              element={<CommentList />}
            /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
