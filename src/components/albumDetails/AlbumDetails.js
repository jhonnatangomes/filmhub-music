import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import Bookmark from "./Bookmark";
import Loading from "../loading/Loading";
import AlbumsContext from "../../contexts/AlbumsContext";

export default function AlbumDetails() {
    const [album, setAlbum] = useState(null);
    const { albums } = useContext(AlbumsContext);
    const { id } = useParams();

    useEffect(() => {
        setAlbum(albums.find((album) => album.id === id));
    }, []);

    return (
        <>
            {album === null ? (
                <Container>
                    <Loading></Loading>
                </Container>
            ) : (
                <Container>
                    {album === undefined ? (
                        "No album found"
                    ) : (
                        <>
                            <AlbumAndArtist>
                                <p>{album.name}</p>
                                <p>{album.artistName}</p>
                            </AlbumAndArtist>
                            <AlbumPicture src={album.artworkUrl100} />
                            <DetailsAndBookmark>
                                <div>
                                    <p>
                                        Release Date:{" "}
                                        {album.releaseDate.replace(/-/g, "/")}
                                    </p>
                                    <p>
                                        Genre:{" "}
                                        {
                                            album.genres.find(
                                                (album) =>
                                                    album.name !== "Music"
                                            ).name
                                        }
                                    </p>
                                </div>
                                <Bookmark album={album} />
                            </DetailsAndBookmark>
                        </>
                    )}
                </Container>
            )}
        </>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const AlbumAndArtist = styled.div`
    width: 450px;
`;

const AlbumPicture = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 20px 0;
`;

const DetailsAndBookmark = styled.div`
    display: flex;
    justify-content: space-between;
    width: 450px;
`;
