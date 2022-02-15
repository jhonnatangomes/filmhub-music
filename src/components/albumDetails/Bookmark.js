import { useState } from "react";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import styled from "styled-components";

export default function Bookmark({ album }) {
    const [bookmarked, setBookMarked] = useState(null);

    return <>{bookmarked ? <UnbookmarkIcon /> : <BookmarkIcon />}</>;
}

const BookmarkIcon = styled(BsBookmark)`
    font-size: 25px;
    height: 100%;
    cursor: pointer;
`;

const UnbookmarkIcon = styled(BsFillBookmarkFill)`
    font-size: 25px;
    height: 100%;
    cursor: pointer;
`;
