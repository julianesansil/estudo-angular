
import { Negociacao, ListaNegociacoes, NegociacaoParcial } from "../models/index";
import { NegociacoesView, MensagemView } from "../views/index";
import { NegociacaoService } from "../services/index";
import { domInject, logarTempoExecucao, throttle } from "../helpers/decorators/index";
import { imprimir } from "../helpers/index";

export class NegociacaoController {

    @domInject("#data")
    private _inputData: JQuery;

    @domInject("#quantidade")
    private _inputQuantidade: JQuery;

    @domInject("#valor")
    private _inputValor: JQuery;

    private _listaNegociacoes = new ListaNegociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");
    private _service = new NegociacaoService();

    constructor() {

        // this._inputData = $("#data");
        // this._inputQuantidade = $("#quantidade");
        // this._inputValor = $("#valor");

        this._negociacoesView.update(this._listaNegociacoes);
    }

    @throttle()
    @logarTempoExecucao(true)
    adicionar(event: Event) {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ","));
        if (!this._isDiaUtil(data)) {

            this._mensagemView.update("Somente negociações em dias úteis, por favor.");
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val()));

        this._listaNegociacoes.adicionar(negociacao);
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso! o//");

        imprimir(negociacao, this._listaNegociacoes);
    }

    @throttle()
    async importar() {

        try {

            function handleErrors(response: Response) {

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                return response;
            }

            const negociacoes: Negociacao[] = await this._service.getNegociacoes(handleErrors);
            
            negociacoes.forEach(negociacao => this._listaNegociacoes.adicionar(negociacao));
            this._negociacoesView.update(this._listaNegociacoes);
        } catch (error) {

            this._mensagemView.update(error.message);
        }
    }

    private _isDiaUtil(data: Date) {

        return (data.getDay() != DiasSemana.Domingo && data.getDay() != DiasSemana.Sabado);
    }

}

enum DiasSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}