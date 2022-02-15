export default function groupByGenre(songs) {
    const genres = {};
    songs.forEach((song) => {
        const genre = song.genres.find((genre) => genre.name !== "Music").name;
        if (genres[genre] === undefined) {
            genres[genre] = [];
        }
        genres[genre].push(song);
    });
    return genres;
}
