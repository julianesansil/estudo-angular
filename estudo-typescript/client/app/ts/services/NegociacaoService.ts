
import { NegociacaoParcial, Negociacao } from "../models/index";

export class NegociacaoService {

    getNegociacoes(handleErrors: HandlerFunction): Promise<Negociacao[]> {

        return fetch("http://localhost:8080/dados")
            .then(response => handleErrors(response))
            .then(response => response.json())
            .then((negociacoes: NegociacaoParcial[]) =>
                negociacoes
                    .map(negociacao => new Negociacao(new Date(), negociacao.vezes, negociacao.montante))
            )
            .catch(error => {
                console.log(error);
                throw new Error("Não foi possível importar as negociações.");
            });
    }
}

export interface HandlerFunction {

    (response: Response): Response;
}