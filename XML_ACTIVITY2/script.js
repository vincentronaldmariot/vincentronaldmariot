document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.querySelector('.movie-list');
  
    fetch('movie.xml')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
  
        const movies = xmlDoc.getElementsByTagName('Movie');
        Array.from(movies).forEach(movie => {
          const title = movie.getElementsByTagName('Title')[0].textContent;
          const year = movie.getElementsByTagName('year')[0].textContent;
          const genre = movie.getElementsByTagName('genre')[0].textContent;
          const director = movie.getElementsByTagName('director')[0].textContent;
          const summary = movie.getElementsByTagName('summary')[0].textContent;
          const imageURL = movie.getElementsByTagName('ImageURL')[0].textContent;
  
          const movieDiv = document.createElement('div');
          movieDiv.classList.add('movie');
          movieDiv.innerHTML = `
            <img src="${imageURL}" alt="${title}">
            <div class="movie-details">
              <h2>${title}</h2>
              <p>${year}</p>
              <p class="genre">${genre}</p>
              <p><strong>Director:</strong> ${director}</p>
              <p>${summary}</p>
            </div>
          `;
  
          movieList.appendChild(movieDiv);
        });
      })
      .catch(error => console.error('Error fetching or parsing XML:', error));
  });
  