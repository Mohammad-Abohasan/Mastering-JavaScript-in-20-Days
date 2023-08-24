const getData = async () => {
  try {
    await fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(character => render(character.results.filter(element => element.status === 'Alive').slice(0, 50)));
  } catch (err) {
    const list = document.getElementById("characterList");
    list.innerHTML = `<h2 class="error">Failed to fetch characters</h2>`
    console.error(err);
  }
}

const render = (data) => {
  const list = document.getElementById("characterList");
  for (let { name, image, location, species, gender } of data) {
    const item = document.createElement('li');
    item.innerHTML = `
      <div class="description">
        <img src=${image} alt=${name} />
        <h2>${name}</h2>
        <a href="${location.url}">${location.name}</a>
        <h4>${species}</h4>
        <h4>${gender}</h4>
      </div>
    `
    list.appendChild(item);
  }
}

getData();