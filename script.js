//Adicionar novo item na lista
function Adicionar(){
  
  //Pegamos o texto digitado, crimamos um array vazio e vamos adicionar o texto digitado no array
  var InputTextAdd = window.document.querySelector("input#text")
  var arrayText = [] 
  arrayText.push(InputTextAdd.value) 

  //Verificamos se o input está vazio, se tiver nos vamos gerar o erro
  if(InputTextAdd.value == ""){
    erro()
    return
  }

  //Localizamos a div geral que vai agrupar as outras divs das tarefas
  var divDasTarefas = window.document.querySelector("div.divtarefas")
  //Repetição para adicionar uma nova div com os elementos na nossa tarefa
  for (let c = 0; c < arrayText.length; c++) {
    divDasTarefas.innerHTML += `<div class="divres"><p class="pres">${arrayText[c]}</p><svg onclick="deletar(this)" id="check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg></div>`
  }

  //depois de digitar e enviar, nosso input ficará vazio
  InputTextAdd.value = ""
}

//Deletar o item, quando clicar no "v"
function deletar(item) {
  var divres = item.closest(".divres")
  if (divres) {
    divres.remove()
  }
}

//Erro quando o input estiver vazio
function erro(){
  Swal.fire({
    icon: "warning",
    title: "Digite algo antes de adicionar!",
    showConfirmButton: false,
    timer: 1500,
  })
}