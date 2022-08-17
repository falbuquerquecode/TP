const cryptoDataMapper = require('../dataMappers/cryptoDataMapper');

module.exports = {
    async addOneCryptoFavoris(request, response) {
        const newCryptoFavoris = request.params.cryptosId;
        const checkUserId = request.params.userId;

        // eslint-disable-next-line max-len
        const cryptoName = await cryptoDataMapper.addOneCryptoFavoris(newCryptoFavoris, checkUserId);

        const CryptoNameForUserId = cryptoName;
        return response.json(CryptoNameForUserId);
    },
    async deleteOneCryptoFavoris(request, response) {
        const cryptoDelete = request.params.cryptosId;
        const checkUserId = request.params.userId;
        // eslint-disable-next-line max-len
        const cryptoName = await cryptoDataMapper.deleteOneCryptoFavoris(cryptoDelete, checkUserId);
        const CryptoNameDeleteForUserId = cryptoName;
        return response.json(CryptoNameDeleteForUserId);
    },
    async getListCryptoFavoris(request, response) {
        const checkUserId = request.params.userId;
        const listCryptoFavoris = await cryptoDataMapper.getListCryptoFavoris(checkUserId);
        return response.json(listCryptoFavoris);
    },

};
