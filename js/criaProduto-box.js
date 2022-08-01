export const criaProduto = data => {
	data.forEach(produto => {
		const conteudo = `<div class="produtos__box" id="${produto.id}">
				<img
					src="${produto.src}"
					alt=""
					class="produtos__img"
				/ >
				<img
					src="${produto.src}"
					alt=""
					class="produtos__img--zoom"
				/ >
				<div class="produtos__conteudo">
					<h2 class="produtos__nome">${produto.nome}</h2>
					<h2 class="produtos__preco">R$ ${produto.preco}</h2>
					<a href="./html/descricao.html?id=${produto.id}" class="produtos__link">Ver Produto</a>
				</div>
			</div>`;

		const container = document.querySelector(
			`[data-container-${produto.categoria}]`
		);

		return container ? (container.innerHTML += conteudo) : null;
	});
};
