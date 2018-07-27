
export function logarTempoExecucao(emSegundos: boolean = false) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {
            
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
        }

        return descriptor;
    }

}
