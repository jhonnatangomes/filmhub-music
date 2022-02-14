import styled from "styled-components";

export default function Song() {
    return (
        <div>
            <SongContainer></SongContainer>
            <SongDetails>
                <p>Album Name</p>
                <p>Artist Name</p>
            </SongDetails>
        </div>
    );
}

const SongContainer = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid gray;
    background-color: red;
    margin-bottom: 10px;
`;

const SongDetails = styled.div`
    p:first-child {
        font-size: 14px;
    }

    p:last-child {
        font-size: 12px;
    }
`;
