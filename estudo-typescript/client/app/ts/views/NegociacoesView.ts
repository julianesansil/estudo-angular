
import { View } from "./View";
import { ListaNegociacoes } from "../models/ListaNegociacoes";

export class NegociacoesView extends View<ListaNegociacoes> {

    template(listaNegociacoes: ListaNegociacoes): string {

        // let negociacaoCtrl = currentNegociacaoCtrl();

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${
                        listaNegociacoes.getNegociacoes().map(negociacao => `
                            <tr>
                                <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `).join("")
                    }
                </tbody>

                <tfoot>
                </tfoot>
            </table>
        `;
    }

}