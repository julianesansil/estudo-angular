
import { Negociacao } from "./Negociacao";
import { Imprimivel } from "./Imprimivel";

export class ListaNegociacoes implements Imprimivel {

    private _negociacoes: Array<Negociacao> = [];
    // private _negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    getNegociacoes(): Array<Negociacao> {

        return [].concat(this._negociacoes);
    }

    toString(): void {

        console.log(JSON.stringify(this._negociacoes));
    }
}