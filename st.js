//chamar o evento 
$('#submit').on('click', function () {
    $('#dateform').val()
    
     //console.log($('#dateform').val())
    //fazendo a requisicao
    $.ajax({
      url: 'https://api.nasa.gov/planetary/apod?api_key=JTxUnXJn18LhDuXfqLxnVQCgJxrN7T70bbyZclUd&date=' +$('#dateform').val(),
    
       //se condicao for satisfeita 
        'success': function (resposta) {    
          // console.log(resposta)
            $('#imagem').html(`<p>${resposta.explanation}</p> <img src="${resposta.url}">`)
            
         
            
      }
    })
    })


