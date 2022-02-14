import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Genres from "../genres/Genres";

export default function Home() {
    return (
        <Container>
            <Top>
                <Title>Filmhub Music</Title>
                <SearchBar>
                    <Search />
                    <SearchIcon />
                </SearchBar>
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

const SearchBar = styled.div`
    position: relative;
    width: 300px;
    height: 30px;
`;

const Search = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 22px;
    outline: none;
    border-radius: 5px;
    border: 1px solid grey;
`;

const SearchIcon = styled(AiOutlineSearch)`
    position: absolute;
    font-size: 20px;
    left: 2px;
    top: 5px;
`;
