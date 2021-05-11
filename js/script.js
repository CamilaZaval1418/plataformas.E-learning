function evaluarQuiz() {

  let respuestasCorrectas=["b","a","c","a","c","c","b","b","a","b"];
  let respuestasUsuario=new Array();
  let respuestasPregunta=new Array();
  let aciertos=0;
  let countPreguntas=0;
  let bien="b.png";
  let mal="m.png";
  let imagenesRespuestas=new Array();
      for (var i=0; i<10; i++){
          respuestasPregunta=document.getElementsByName('p'+(i+1));
      for (var j=0; j <=2; j++){
          if(respuestasPregunta[j].checked==true){
              countPreguntas++;
              respuestasUsuario[i]=respuestasPregunta[j].value;
          if (respuestasPregunta[j].value==respuestasCorrectas[i]){
              imagenesRespuestas[i]=bien;
              aciertos++;
          }else{
              imagenesRespuestas[i]=mal;
          }
          }        
      }
      }
      for (var i=0; i <10; i++){
          console.log("Respuesta"+(i+1)+" "+respuestasUsuario[i]+"imagen"+imagenesRespuestas[i])
      }
      if (countPreguntas==10){
          html="<table class='table'>";
          html+="<tr>";
          html+="<td> Pregunta</td>";
          html+="<td> Tu respuesta fue </td>";
          html+="<td> La respuesta correcta es</td>";
          html+="<td> Puntuación</td>";
          html+="<tr>";
      for(var i=0; i <10; i++){
          html+="<tr>";
          html+="<td>" +(i+1)+"</td>";
          html+="<td>" +respuestasUsuario[i]+"</td>";
          html+="<td>" +respuestasCorrectas[i]+"</td>";
          html+="<td><img src='" +imagenesRespuestas[i]+"' width=30 height=30></td>";
          html+="<tr>";

          }
          html+="</table>";
          html+="<span class='display-4'>Tu calificacion "+aciertos+"</span>"
          document.getElementById('resultado').innerHTML=html;

      }else{
          
          alert("Por favor conteste todas las preguntas");
      }
      }
  function resetQuiz() {
      for (var i=0; i <10; i++){
       respuestasPregunta=document.getElementsByName('p'+(i+1));
      for (var j=0; j <=2; j++){
          respuestasPregunta[j].checked=false;
}
  }
  document.getElementById('resultado').innerHTML="";

}