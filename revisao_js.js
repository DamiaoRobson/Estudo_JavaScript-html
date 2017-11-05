
function exibeNome(){
	let elNome = document.getElementById('txtNome');
	let strNome = elNome.value;
	let elDisplay = document.getElementById("display");
	elDisplay.innerText = strNome;

}

function novoContato(){
	let elListaContatos = document.getElementById("listaContatos");
	let inputContato = document.createElement("input");

			//criando o label
			let labelContato = document.createElement("label");
			let br = document.createElement("br");

			//adicionar o botao excluir
			let btnExcluir = document.createElement("input");
			btnExcluir.setAttribute("type","button");
			btnExcluir.setAttribute("value","Remover");

			btnExcluir.onclick = function (){

				elListaContatos.removeChild(divLinha);
				//window.alert("Cliente Excluido!");
			};
			//teg <div></div>
			labelContato.innerText = "Contato: ";
			let divLinha = document.createElement("div");

			divLinha.appendChild(labelContato);
			divLinha.appendChild(inputContato);
			divLinha.appendChild(btnExcluir);
			divLinha.appendChild(br);

			elListaContatos.appendChild(divLinha);

			//console.log(strNome);//printa o valor dentro do console de inspecao de elementos
		}