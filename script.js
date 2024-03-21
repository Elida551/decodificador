let textArea = document.querySelector(".conteudo_textarea");
let textArea2 = document.querySelector(".textearea_segunda_secao");
let conteudoImg = document.querySelector(".conteudo_img");
let ParagrafoIformativo = document.querySelector(".segunda_secao_paragrafos");
let botaoCopiar = document.querySelector(".botao_copiar");

function btnCriptografar() {
   let textoEncriptado = encriptar(textArea.value);
   textArea2.value = textoEncriptado;
   textArea.value = "";
   }

   function  ocultarExibir() {
   conteudoImg.style.display = "none";
   ParagrafoIformativo.style.display = "none";
   botaoCopiar.style.display = "block"

}
 function btnDesencriptografar() {
   let textoDesencriptado = desencriptar(textArea.value);
   
   textArea2.value = textoDesencriptado;
   textArea.value = ''
 }
 
function encriptar( stringEncriptada) { 
   let matrizCodigo = [["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"]]
   stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
      if(stringEncriptada.includes(matrizCodigo[i][0])) {
         stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
      }
       return stringEncriptada;
      }
  function desencriptar( stringDesencriptada) { 
    let matrizCodigo = [["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"]]
  stringDesencriptada = stringDesencriptada.toLowerCase();
      
      for(let i = 0; i < matrizCodigo.length; i++) {
      if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada= stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
       }
      }
        return stringDesencriptada;
      
    }

  function copiarTexto(){
    let textArea2 = document.querySelector(".textearea_segunda_secao");
    textArea2.select();
    document.execCommand("copy");
   
    conteudoImg.style.display = "block";
    ParagrafoIformativo.style.display = "block";
    botaoCopiar.style.display = "none"
 

   }
   
  
   
     
