import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { DebounceInput } from "react-debounce-input";
import { useEffect, useState } from "react";
import { getAlbums } from "../../services/api";

export default function Search() {
    const [value, setValue] = useState("");
    const [albums, setAlbums] = useState(null);
    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        getAlbums().then((res) => setAlbums(res.data.feed.results));
    }, []);

    function searchAlbum(e) {
        setValue(e.target.value);
        const results = albums.filter((album) =>
            album.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchResults(results);
    }

    return (
        <SearchBar>
            <Input
                minLength={3}
                debounceTimeout={300}
                onChange={searchAlbum}
                value={value}
            />
            <SearchIcon />
            {value && searchResults ? (
                <SearchResults>
                    {searchResults.length !== 0
                        ? searchResults.map((result) => (
                              <Result key={result.id}>
                                  <img src={result.artworkUrl100} />
                                  <div>
                                      <p>{result.name}</p>
                                      <p>{result.artistName}</p>
                                  </div>
                              </Result>
                          ))
                        : "No results found"}
                </SearchResults>
            ) : (
                ""
            )}
        </SearchBar>
    );
}

const SearchBar = styled.div`
    position: relative;
    width: 300px;
    height: 30px;
`;

const Input = styled(DebounceInput)`
    width: 100%;
    height: 100%;
    padding: 0 22px;
    outline: none;
    border-radius: ${({ value }) => (value ? "5px 5px 0 0" : "5px")};
    border: 1px solid grey;
    border-bottom: ${({ value }) => (value ? "none" : "1px solid grey")};
`;

const SearchIcon = styled(AiOutlineSearch)`
    position: absolute;
    font-size: 20px;
    left: 2px;
    top: 5px;
`;

const SearchResults = styled.div`
    position: absolute;
    padding: 15px;
    width: 100%;
    max-height: 182px;
    border: 1px solid grey;
    border-radius: 0 0 5px 5px;
    top: 30px;
    overflow-y: auto;

    & > div:not(:last-child) {
        margin-bottom: 10px;
    }
`;

const Result = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    img {
        width: 30px;
        height: 30px;
        object-fit: cover;
    }

    div {
        width: 225px;
    }

    div p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    div p:first-child {
        font-size: 15px;
        -webkit-line-clamp: 2;
    }

    div p:last-child {
        font-size: 12px;
        -webkit-line-clamp: 1;
    }
`;
