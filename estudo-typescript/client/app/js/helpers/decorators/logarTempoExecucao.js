System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoExecucao(emSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = "ms";
                let divisor = 1;
                if (emSegundos) {
                    unidade = "s";
                    divisor = 100;
                }
                console.log(`----------------- ${propertyKey} -----------------`);
                console.log(`Parâmetros passados: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`Retorno do método: ${JSON.stringify(retorno)}`);
                console.log(`Tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
                console.log(`---------------------------------------------------`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoExecucao", logarTempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
