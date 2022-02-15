import { useEffect, useState } from "react";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import styled from "styled-components";
import LocalStorage from "../../helpers/LocalStorage";

export default function Bookmark({ album }) {
    const [bookmarked, setBookMarked] = useState(null);

    useEffect(() => {
        const bookmarkedLocalStorage = LocalStorage.getValue("bookmarked");
        if (
            bookmarkedLocalStorage &&
            bookmarkedLocalStorage.some(
                (bookmarkedAlbum) => bookmarkedAlbum.id === album.id
            )
        ) {
            setBookMarked(album);
        }
    }, []);

    function bookmark() {
        const bookmarkedLocalStorage = LocalStorage.getValue("bookmarked");
        if (!bookmarkedLocalStorage) {
            LocalStorage.setValue("bookmarked", [album]);
        } else {
            bookmarkedLocalStorage.push(album);
            LocalStorage.setValue("bookmarked", bookmarkedLocalStorage);
        }
        setBookMarked(album);
    }

    function unbookmark() {
        let bookmarkedLocalStorage = LocalStorage.getValue("bookmarked");
        bookmarkedLocalStorage = bookmarkedLocalStorage.filter(
            (bookmarkedAlbum) => bookmarkedAlbum.id !== album.id
        );
        LocalStorage.setValue("bookmarked", bookmarkedLocalStorage);
        setBookMarked(null);
    }

    return (
        <>
            {bookmarked ? (
                <UnbookmarkIcon onClick={unbookmark} />
            ) : (
                <BookmarkIcon onClick={bookmark} />
            )}
        </>
    );
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
