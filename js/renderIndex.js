import { linksProdutos } from "./descricaoLinks.js";
import { formContatoValidity } from "./forms/formContato.js";
import { search } from "./search.js";
import { serverService } from "./serverService.js";

(async () => {
	const dadosProdutos = await serverService.recebeProdutos();
	serverService.criaSessaoCategoria(dadosProdutos);
	serverService.criaProduto(dadosProdutos);
	linksProdutos();
	formContatoValidity();
	search();
})();
