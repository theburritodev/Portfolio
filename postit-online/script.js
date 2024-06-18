const apiUrl = 'https://sheetdb.io/api/v1/3c5algt76yp88';

function post()
{
  const novoPostIt = {
        content: document.getElementById("postit").innerText,
        id: Date.now()
      };
  const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(novoPostIt)
};
  fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
      alert('Novo post-it adicionado:');
    })
    .catch(error => {
      console.error('Erro ao adicionar novo post-it:', error);
    });

}

function obterDadosDoSheetDB() {

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
      for(let i in data)
        {
          if(i == document.getElementById("name").value) document.getElementById("postit").innerText = data[i].content;
        }
    })
    .catch(error => {
      console.error('Erro ao obter dados da base de dados:', error);
    });
}

document.getElementById("name").addEventListener("change",(e)=>{
  obterDadosDoSheetDB();
});
