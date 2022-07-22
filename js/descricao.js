import { serverService } from "./criaProduto-box.js";

serverService.recebeProdutos().then(() => {
	let produtos = document.querySelectorAll(".produtos__img");
	let links = document.querySelectorAll(".produtos__link");

	produtos.forEach(imagem => {
		imagem.addEventListener("click", () => {
			let id = imagem.closest(".produtos__box").id;
			let img = imagem.src;
			let sessao =
				imagem.closest(".produtos__box").parentElement.parentElement.id;

			const descricaoInfo = {
				id: id,
				imagem: img,
				categoria: sessao
			};
			window.location.href = "./html/descricao.html";
			window.localStorage.setItem(
				"produtoInfo",
				JSON.stringify(descricaoInfo)
			);
		});
	});

	links.forEach(link => {
		link.addEventListener("click", event => {
			event.preventDefault();
			let img = link.closest(".produtos__box").firstElementChild.src;
			let id = link.closest(".produtos__box").id;
			let sessao =
				link.closest(".produtos__box").parentElement.parentElement.id;

			const descricaoInfo = {
				id: id,
				imagem: img,
				categoria: sessao
			};

			window.location.href = "./html/descricao.html";
			window.localStorage.setItem(
				"produtoInfo",
				JSON.stringify(descricaoInfo)
			);
		});
	});
});
