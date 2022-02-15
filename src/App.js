import GlobalStyle from "./global/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AlbumDetails from "./components/albumDetails/AlbumDetails";
import AlbumsContext from "./contexts/AlbumsContext";
import { useState } from "react";

function App() {
    const [albums, setAlbums] = useState(null);
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AlbumsContext.Provider value={{ albums, setAlbums }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/album/:id" element={<AlbumDetails />} />
                </Routes>
            </AlbumsContext.Provider>
        </BrowserRouter>
    );
}

export default App;
