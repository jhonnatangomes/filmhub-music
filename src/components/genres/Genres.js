import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AlbumsContext from "../../contexts/AlbumsContext";
import Album from "../album/Album";
import Loading from "../loading/Loading";
import groupByGenre from "./groupByGenre";

export default function Genres() {
    const { albums } = useContext(AlbumsContext);
    const [albumsbyGenre, setAlbumsByGenre] = useState(null);

    useEffect(() => {
        if (albums) {
            setAlbumsByGenre(groupByGenre(albums));
        }
    }, [albums]);

    return (
        <>
            {albumsbyGenre ? (
                Object.keys(albumsbyGenre).map((genre, i) => (
                    <Container key={i}>
                        <GenreName>{genre}</GenreName>
                        <Albums>
                            {albumsbyGenre[genre].map((album) => (
                                <Album
                                    key={album.id}
                                    imageUrl={album.artworkUrl100}
                                    albumName={album.name}
                                    artistName={album.artistName}
                                    id={album.id}
                                />
                            ))}
                        </Albums>
                    </Container>
                ))
            ) : (
                <LoadingContainer>
                    <Loading />
                </LoadingContainer>
            )}
        </>
    );
}

const LoadingContainer = styled.div`
    height: calc(100vh - 95px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
