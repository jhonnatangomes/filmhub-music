import styled from "styled-components";
import Genres from "../genres/Genres";
import Search from "../search/Search";

export default function Home() {
    return (
        <Container>
            <Top>
                <Title>Filmhub Music</Title>
                <Search />
            </Top>
            <Genres />
        </Container>
    );
}

const Container = styled.div`
    padding: 30px;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.p`
    font-size: 35px;
`;
