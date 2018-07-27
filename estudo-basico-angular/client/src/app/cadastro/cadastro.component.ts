import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styles: [`
		[disabled] {
			cursor: not-allowed;
		}
	`]
})
export class CadastroComponent implements OnInit {

	foto = new FotoComponent();
	mensagem = new MensagemComponent();

	formCadastro: FormGroup;

	constructor(private fotoService: FotoService,
		private rotaAtiva: ActivatedRoute,
		private roteador: Router,
		private formBuilder: FormBuilder) {

			this.formCadastro = formBuilder.group({
				titulo: ["", Validators.compose([Validators.required, Validators.minLength(5)])],
				url: ["", Validators.required],
				descricao: ""
			});
	}

	ngOnInit() {
		this.rotaAtiva.params.subscribe(parametro => {
			if (parametro.idFoto) {
				this.fotoService.consultar(parametro.idFoto).subscribe(foto => {
					this.foto = foto;
				});
			}
		});
	}

	cadastrar(foto) {
		let cabecalho = new HttpHeaders();
		cabecalho.append("Content-Type", "application/json");

		if (!foto._id) {
			this.fotoService.cadastrar(foto)
				.subscribe(
					resposta => {
						console.log(resposta);
						this.foto = new FotoComponent();
						this.mensagem = resposta;
					},
					error => {
						console.log(error);
						this.mensagem.texto = `Ops!, algo errado aconteceu: ${error.message}`;
						this.mensagem.tipo = "danger";
					}
				)
		} else {
			this.fotoService.alterar(foto)
				.subscribe(
					resposta => {
						this.mensagem = resposta;

						setTimeout(() => {
							this.roteador.navigate([""]);
						}, 1000);
					},
					error => {
						this.mensagem.texto = `Ops!, algo errado aconteceu: ${error.message}`;
						this.mensagem.tipo = "danger";
					}
				)
		}
	}

}
