System.register(["../models/index", "../views/index", "../services/index", "../helpers/decorators/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, index_5, NegociacaoController, DiasSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._listaNegociacoes = new index_1.ListaNegociacoes();
                    this._negociacoesView = new index_2.NegociacoesView("#negociacoesView");
                    this._mensagemView = new index_2.MensagemView("#mensagemView");
                    this._service = new index_3.NegociacaoService();
                    this._negociacoesView.update(this._listaNegociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ","));
                    if (!this._isDiaUtil(data)) {
                        this._mensagemView.update("Somente negociações em dias úteis, por favor.");
                        return;
                    }
                    const negociacao = new index_1.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._listaNegociacoes.adicionar(negociacao);
                    this._negociacoesView.update(this._listaNegociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso! o//");
                    index_5.imprimir(negociacao, this._listaNegociacoes);
                }
                importar() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            function handleErrors(response) {
                                if (!response.ok) {
                                    throw new Error(response.statusText);
                                }
                                return response;
                            }
                            const negociacoes = yield this._service.getNegociacoes(handleErrors);
                            negociacoes.forEach(negociacao => this._listaNegociacoes.adicionar(negociacao));
                            this._negociacoesView.update(this._listaNegociacoes);
                        }
                        catch (error) {
                            this._mensagemView.update(error.message);
                        }
                    });
                }
                _isDiaUtil(data) {
                    return (data.getDay() != DiasSemana.Domingo && data.getDay() != DiasSemana.Sabado);
                }
            };
            __decorate([
                index_4.domInject("#data")
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_4.domInject("#quantidade")
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_4.domInject("#valor")
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_4.throttle(),
                index_4.logarTempoExecucao(true)
            ], NegociacaoController.prototype, "adicionar", null);
            __decorate([
                index_4.throttle()
            ], NegociacaoController.prototype, "importar", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiasSemana) {
                DiasSemana[DiasSemana["Domingo"] = 0] = "Domingo";
                DiasSemana[DiasSemana["Segunda"] = 1] = "Segunda";
                DiasSemana[DiasSemana["Terca"] = 2] = "Terca";
                DiasSemana[DiasSemana["Quarta"] = 3] = "Quarta";
                DiasSemana[DiasSemana["Quinta"] = 4] = "Quinta";
                DiasSemana[DiasSemana["Sexta"] = 5] = "Sexta";
                DiasSemana[DiasSemana["Sabado"] = 6] = "Sabado";
            })(DiasSemana || (DiasSemana = {}));
        }
    };
});
