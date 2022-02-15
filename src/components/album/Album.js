import styled from "styled-components";

export default function Album({ imageUrl, albumName, artistName }) {
    return (
        <div>
            <AlbumContainer>
                <img src={imageUrl} />
            </AlbumContainer>
            <AlbumDetails>
                <p>{albumName}</p>
                <p>{artistName}</p>
            </AlbumDetails>
        </div>
    );
}

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
    p:first-child {
        font-size: 14px;
    }

    p:last-child {
        font-size: 12px;
    }
`;
