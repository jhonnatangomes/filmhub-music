import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";

export default function Search() {
    const [value, setValue] = useState("");
    console.log(value);
    return (
        <SearchBar>
            <Input
                minLength={3}
                debounceTimeout={300}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <SearchIcon />
            {value ? <SearchResults /> : ""}
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
    width: 300px;
    height: 100px;
    border: 1px solid grey;
    border-radius: 0 0 5px 5px;
    top: 30px;
`;
