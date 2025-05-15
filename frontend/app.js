const container = document.getElementById('articles');

fetch('data.json')
  .then(response => {
    if (!response.ok) throw new Error('Не вдалося отримати статті');
    return response.json();
  })
  .then(data => {
    if (!data.articles || data.articles.length === 0) {
      container.textContent = 'Статей поки немає 😢';
      return;
    }

    container.innerHTML = '';
    data.articles.forEach(article => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(() => {
    container.textContent = 'Не вдалося завантажити статті 😢';
  });
