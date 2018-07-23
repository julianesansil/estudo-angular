class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    getNegociacoes() {
        return [].concat(this._negociacoes);
    }
}
