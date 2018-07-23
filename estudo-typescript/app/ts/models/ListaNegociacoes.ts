
class ListaNegociacoes {

    private _negociacoes: Array<Negociacao> = [];
    // private _negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    getNegociacoes(): Array<Negociacao> {

        return [].concat(this._negociacoes);
    }

}