export default function groupByGenre(albums) {
    const genres = {};
    albums.forEach((album) => {
        const genre = album.genres.find((genre) => genre.name !== "Music").name;
        if (genres[genre] === undefined) {
            genres[genre] = [];
        }
        genres[genre].push(album);
    });
    return genres;
}
