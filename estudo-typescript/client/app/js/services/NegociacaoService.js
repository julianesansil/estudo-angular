System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegociacaoService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService {
                getNegociacoes(handleErrors) {
                    return fetch("http://localhost:8080/dados")
                        .then(response => handleErrors(response))
                        .then(response => response.json())
                        .then((negociacoes) => negociacoes
                        .map(negociacao => new index_1.Negociacao(new Date(), negociacao.vezes, negociacao.montante)))
                        .catch(error => {
                        console.log(error);
                        throw new Error("Não foi possível importar as negociações.");
                    });
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
