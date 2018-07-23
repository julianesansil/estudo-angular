class NegociacaoController {
    constructor() {
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoesView.update(this._listaNegociacoes);
    }
    adicionar(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace(/-/g, ",")), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._listaNegociacoes.adicionar(negociacao);
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso! o//");
    }
}
