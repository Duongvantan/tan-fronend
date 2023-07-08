API.get('categories_news').then((res) => {
  const data = res.data.data;
  renderMenus(data);
});

function renderMenus(listItems) {
  let html = '';
  let htmlChild = '';
  listItems.forEach((item, index) => {
    if (index < 3) {
      html += /*html*/ `<li class="nav-item"><a class="nav-link" href="#">${item.name}</a></li>`;
    } else {
      htmlChild += /*html*/ `<li class="nav-item"><a class="dropdown-item" href="#">${item.name}</a></li>`;
    }
  });

  for (let i = 0; i < elMainMenu.length; i++) {
    elMainMenu[i].innerHTML =
      html +
      /*html*/ `
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Danh mục khác</a>
        <ul class="dropdown-menu">${htmlChild}</ul>
      </li>`;
  }
}
