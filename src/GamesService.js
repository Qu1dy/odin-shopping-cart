const GamesService = (() => {
    const BASE_URL = "https://www.cheapshark.com/api/1.0/";
    const _getData = async (requestURL) => {
        console.log(requestURL);
        const result = await fetch(requestURL);
        const resText = await result.text();
        return JSON.parse(resText);
    };

    const _buildDealURL = (dealID) =>
        `https://www.cheapshark.com/redirect?dealID=${dealID}`;

    const getGames = async (gameTitle) => {
        const requestURL = `${BASE_URL}/games?title=${gameTitle}`;
        const data = await _getData(requestURL);
        return data.map(
            ({ gameID, cheapest, cheapestDealID, external, thumb }) => ({
                id: Number(gameID),
                price: Number(cheapest),
                dealURL: _buildDealURL(cheapestDealID),
                title: external,
                imageURL: thumb,
            })
        );
    };

    return { getGames };
})();

export default GamesService;
