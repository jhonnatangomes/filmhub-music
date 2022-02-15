import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Genres from "../genres/Genres";
import Search from "../search/Search";

export default function Home() {
    return (
        <Container>
            <Top>
                <Title>Filmhub Music</Title>
                <SearchAndBookmark>
                    <Link to="/bookmarks">
                        <BookmarkIcon />
                    </Link>
                    <Search />
                </SearchAndBookmark>
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

const SearchAndBookmark = styled.div`
    display: flex;
    align-items: center;
    width: 350px;
    justify-content: space-between;
`;

const BookmarkIcon = styled(BsFillBookmarkFill)`
    font-size: 25px;
    cursor: pointer;
`;
