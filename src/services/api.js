import axios from "axios";

function getAlbums() {
    return axios.get(
        "https://apple-proxy.herokuapp.com/https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json"
    );
}

export { getAlbums };
