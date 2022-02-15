import GlobalStyle from "./global/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AlbumDetails from "./components/albumDetails/AlbumDetails";
import Bookmarks from "./components/bookmarks/Bookmarks";
import { useEffect, useState } from "react";
import AlbumsContext from "./contexts/AlbumsContext";
import { getAlbums } from "./services/api";

function App() {
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        getAlbums().then((res) => setAlbums(res.data.feed.results));
    }, []);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <AlbumsContext.Provider value={{ albums }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/album/:id" element={<AlbumDetails />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                </Routes>
            </AlbumsContext.Provider>
        </BrowserRouter>
    );
}

export default App;
