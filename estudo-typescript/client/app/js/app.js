System.register(["./controllers/NegociacaoController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacaoController_1, negociacaoCtrl;
    return {
        setters: [
            function (NegociacaoController_1_1) {
                NegociacaoController_1 = NegociacaoController_1_1;
            }
        ],
        execute: function () {
            negociacaoCtrl = new NegociacaoController_1.NegociacaoController();
            $(".form").submit(negociacaoCtrl.adicionar.bind(negociacaoCtrl));
            $("#btnImportar").click(negociacaoCtrl.importar.bind(negociacaoCtrl));
        }
    };
});
