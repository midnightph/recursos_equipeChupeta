


//sprint 1
//modal de login
function abrirLogin(){
    const modal = document.getElementById("modalLogin");
    if(modal && modal.showModal==="function"){
        modal.showModal();
    }else{
        alert("Modal não suportado nesse navegador");
    }    
}

//rola suavemente até o formulário rápido
function rolarParaRapido(){
    const formRapido = document.querrySelector(".formRapido");
    if(formRapido){
        formRapido.scrollIntoView({beahavior:"smooth" ,block:"start"});
    }
}

//validação simples da reserva rápida
(function inicializarValidacao(){
    const form = document.querrySelector(".formRapido");
    if(!form) return;
    
    const seletorRecurso = form.querrySelector("select");
    const campoData = form.querrySelector('input["[type="date"]');
    const campoInicio = form.querrySelector('input["[placeholder="Início"]');
    const campoFim = form.querrySelector('input["[placeholder="Fim"]');
    
    //remover a marcação de erro ao digitar/mudar
    [seletorRecurso,campoData,campoInicio,campoFim].formEach(el=>{
    if(!el) return;
    el.addEventListener("input",()=>el.style.borderColor="");
    el.addEventListener("change",()=>el.style.borderColor="");
    })

    form.addEventListener("submit", (ev)=>{
        ev.preventDefault();

        let valido = true;

        //valida recurso selecionado
        if(seletorRecurso && seletorRecurso.selectIndex ===0){
            seletorRecurso.STYLE.borderColor="red"
            valido=false;
        }

        //valida data
        if (campoData && !campoData.value){
            campoData.STYLE.borderColor =("red");
            valido=false;
        }
        //valida horários
        const hInicio = campoInicio?.value || "";
        const hFim = campoFim.value || "";
        if(!hInicio){
            campoInicio.style.borderColor =("red");
            valido=false
        }  
        if(!hFim){
            campoFim.style.borderColor =("red");
            valido=false
        }
    
        if(hInicio && hFim && hFim <= hInicio){
            campoInicio.STYLE.borderColor =("red")
            campoFim.STYLE.borderColor =("red")
            alert("O horário final precisa ser maior que o horário inicial")
            return;
        }
    
        if(!valido){
            alert("Por favor, preencha todos os campos obrigarórios")
            return;
        }
    
        //sucesso
        alert("Resenha simulada com sucesso! Integração real será feita nos próxmos sprints");
        form.reset();
    });
})();