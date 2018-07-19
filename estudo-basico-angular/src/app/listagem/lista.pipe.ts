import { Pipe, PipeTransform } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";

@Pipe({
    name: "filtroPorTitulo"
})

export class FiltroPorTitulo implements PipeTransform {

    transform(listaFotos: FotoComponent[], filtro: string) {
        return listaFotos.filter(foto => {
            return foto.titulo.toUpperCase().includes(filtro.toUpperCase());
        });
    }

} 