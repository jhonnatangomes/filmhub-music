import groupByGenre from "../src/components/genres/groupByGenre";

describe("Group By Genre", () => {
    const albums = [
        {
            id: 1,
            genres: [
                {
                    genreId: 1,
                    name: "Music",
                },
                {
                    genreId: 2,
                    name: "Soul",
                },
            ],
        },
        {
            id: 2,
            genres: [
                {
                    genreId: 1,
                    name: "Blues",
                },
                {
                    genreId: 2,
                    name: "Music",
                },
            ],
        },
        {
            id: 3,
            genres: [
                {
                    genreId: 1,
                    name: "Blues",
                },
                {
                    genreId: 2,
                    name: "Music",
                },
            ],
        },
        {
            id: 4,
            genres: [
                {
                    genreId: 1,
                    name: "Music",
                },
                {
                    genreId: 2,
                    name: "Soul",
                },
            ],
        },
    ];

    it("group results by genre", () => {
        const result = groupByGenre(albums);
        expect(result).toEqual({
            Soul: [
                {
                    id: 1,
                    genres: [
                        {
                            genreId: 1,
                            name: "Music",
                        },
                        {
                            genreId: 2,
                            name: "Soul",
                        },
                    ],
                },
                {
                    id: 4,
                    genres: [
                        {
                            genreId: 1,
                            name: "Music",
                        },
                        {
                            genreId: 2,
                            name: "Soul",
                        },
                    ],
                },
            ],
            Blues: [
                {
                    id: 2,
                    genres: [
                        {
                            genreId: 1,
                            name: "Blues",
                        },
                        {
                            genreId: 2,
                            name: "Music",
                        },
                    ],
                },
                {
                    id: 3,
                    genres: [
                        {
                            genreId: 1,
                            name: "Blues",
                        },
                        {
                            genreId: 2,
                            name: "Music",
                        },
                    ],
                },
            ],
        });
    });
});
