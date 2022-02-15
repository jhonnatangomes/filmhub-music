import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Album({ imageUrl, albumName, artistName, id }) {
    return (
        <Container>
            <Link to={`/album/${id}`}>
                <AlbumContainer>
                    <img src={imageUrl} />
                </AlbumContainer>
                <AlbumDetails>
                    <p>{albumName}</p>
                    <p>{artistName}</p>
                </AlbumDetails>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    cursor: pointer;
`;

const AlbumContainer = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid gray;
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const AlbumDetails = styled.div`
    max-width: 100px;
    p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;
    }

    p:first-child {
        font-size: 14px;
    }

    p:last-child {
        font-size: 12px;
    }
`;
