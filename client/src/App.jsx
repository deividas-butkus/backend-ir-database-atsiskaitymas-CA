import { Routes, Route } from "react-router-dom";

import PageTemplate from "./components/templates/PageTemplate";
import Home from "./components/organisms/mains/Home";
import Books from "./components/organisms/mains/Books";
import Book from "./components/organisms/mains/Book";

const App = () => {
  return (
    <Routes>
      <Route element={<PageTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookId" element={<Book />} />
      </Route>
    </Routes>
  );
};

export default App;
