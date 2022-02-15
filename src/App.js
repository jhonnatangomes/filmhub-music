import GlobalStyle from "./global/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AlbumDetails from "./components/albumDetails/AlbumDetails";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/album/:id" element={<AlbumDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
