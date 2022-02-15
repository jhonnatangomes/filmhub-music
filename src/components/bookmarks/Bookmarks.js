import styled from "styled-components";
import LocalStorage from "../../helpers/LocalStorage";
import Album from "../album/Album";

export default function Bookmarks() {
    const bookmarked = LocalStorage.getValue("bookmarked");
    return (
        <Container>
            <Title>Bookmarks</Title>
            {bookmarked && (
                <Albums>
                    {bookmarked.length !== 0
                        ? bookmarked.map((album) => (
                              <Album
                                  key={album.id}
                                  imageUrl={album.artworkUrl100}
                                  albumName={album.name}
                                  artistName={album.artistName}
                                  id={album.id}
                              />
                          ))
                        : "No albums bookmarked yet"}
                </Albums>
            )}
        </Container>
    );
}

const Container = styled.div`
    padding: 30px;
`;

const Title = styled.p`
    font-size: 30px;
`;

const Albums = styled.div`
    margin-top: 40px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;

    > div:not(:last-child) {
        margin-right: 20px;
    }
`;
