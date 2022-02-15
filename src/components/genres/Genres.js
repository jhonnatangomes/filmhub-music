import { useContext, useEffect } from "react";
import styled from "styled-components";
import AlbumsContext from "../../contexts/AlbumsContext";
import { getAlbums } from "../../services/api";
import Album from "../album/Album";
import groupByGenre from "./groupByGenre";

export default function Genres() {
    const { albums, setAlbums } = useContext(AlbumsContext);
    useEffect(() => {
        getAlbums().then((res) => {
            const albumsByGenre = groupByGenre(res.data.feed.results);
            setAlbums(albumsByGenre);
        });
    }, []);

    return (
        <>
            {albums &&
                Object.keys(albums).map((genre, i) => (
                    <Container key={i}>
                        <GenreName>{genre}</GenreName>
                        <Albums>
                            {albums[genre].map((album) => (
                                <Album
                                    key={album.id}
                                    imageUrl={album.artworkUrl100}
                                    albumName={album.name}
                                    artistName={album.artistName}
                                />
                            ))}
                        </Albums>
                    </Container>
                ))}
        </>
    );
}

const Container = styled.div`
    margin-top: 40px;
`;

const GenreName = styled.p`
    font-size: 25px;
    margin-bottom: 20px;
`;

const Albums = styled.div`
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;

    > div:not(:last-child) {
        margin-right: 20px;
    }
`;
