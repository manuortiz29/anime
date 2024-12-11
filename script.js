function buscarAnime() {
  const searchInput = document.getElementById('animeSearch').value;
  const apiUrl = `https://api.jikan.moe/v4/anime?q=${searchInput}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const resultadosDiv = document.getElementById('resultados');
      resultadosDiv.innerHTML = '';

      data.data.forEach(anime => {
        const resultado = document.createElement('div');
        resultado.innerHTML = `
          <h2>${anime.title}</h2>
          <p>Episodios: ${anime.episodes}</p>
          <a href="${anime.url}">Más información</a>
        `;
        resultadosDiv.appendChild(resultado);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      resultadosDiv.innerHTML = 'No se encontraron resultados.';
    });
}