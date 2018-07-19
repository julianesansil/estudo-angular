import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

import { environment } from '../../environments/environment';
import { FotoComponent } from "./foto.component";
import { MensagemComponent } from "../mensagem/mensagem.component";

@Injectable()
export class FotoService {

    url = environment.URL_FOTOS;
    cabecalho = {
        headers: new HttpHeaders({ 'Content-Tyope': 'application/json' })
    }

    constructor(private conexaoApi: HttpClient) {

    }

    listar(): Observable<FotoComponent[]> {
        return this.conexaoApi.get<FotoComponent[]>(this.url);
    }

    cadastrar(foto: FotoComponent): Observable<MensagemComponent> {
        return this.conexaoApi.post(this.url, foto, this.cabecalho)
            .pipe(
                map(() => {
                    let mensagem = new MensagemComponent();

                    mensagem.texto = "Cadastro realizado com sucesso";
                    mensagem.tipo = "success"

                    return mensagem;
                })
            );
    }

    deletar(foto: FotoComponent): Observable<Object> {
        return this.conexaoApi.delete(this.url + foto._id);
    }

    consultar(idFoto): Observable<FotoComponent> {
        return this.conexaoApi.get<FotoComponent>(this.url + idFoto);
    }

    alterar(foto: FotoComponent): Observable<MensagemComponent> {
        return this.conexaoApi.put(this.url + foto._id, foto)
            .pipe(
                map(() => {
                    let mensagem = new MensagemComponent();

                    mensagem.texto = "Alteração realizada com sucesso";
                    mensagem.tipo = "success"

                    return mensagem;
                })
            )
    }
}
