import styled from "styled-components";
import Song from "../song/Song";

export default function Genres() {
    return (
        <>
            <Container>
                <GenreName>Genre 1</GenreName>
                <Songs>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                </Songs>
            </Container>
            <Container>
                <GenreName>Genre 1</GenreName>
                <Songs>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                    <Song></Song>
                </Songs>
            </Container>
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

const Songs = styled.div`
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;

    > div {
        margin-right: 20px;
    }
`;
