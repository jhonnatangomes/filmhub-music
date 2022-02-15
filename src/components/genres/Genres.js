import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSongs } from "../../services/api";
import Song from "../song/Song";
import groupByGenre from "./groupByGenre";

export default function Genres() {
    const [songs, setSongs] = useState(null);
    useEffect(() => {
        getSongs().then((res) => {
            groupByGenre(res.data.feed.results);
        });
    }, []);

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

    > div:not(:last-child) {
        margin-right: 20px;
    }
`;
