import GlobalStyle from "./global/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AlbumDetails from "./components/albumDetails/AlbumDetails";
import Bookmarks from "./components/bookmarks/Bookmarks";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/album/:id" element={<AlbumDetails />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
