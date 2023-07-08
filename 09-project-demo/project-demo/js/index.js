const elMainMenu = document.getElementById('main-menu-content');
const elArticlesLatest = document.getElementById('articles-latest');
const elArticlesPopularTop = document.getElementById('articles-popular-top');
const elArticlesPopularBottom = document.getElementById('articles-popular-bottom');

/*
- url (link api, api url): 
  + https://apiforlearning.zendvn.com/api/v2/articles?limit=4
  + https://zendvn.com/hoc-lap-trinh-online?tags=1,11,2,4&teachers=19,23
  + https://zendvn.com/hoc-lap-trinh-online
- query string
  + ?limit=4
  + ?tags=1,11,2,4&teachers=19,23
- url parameter
  - limit
  - tags
  - teachers
 
*/
fetch('https://apiforlearning.zendvn.com/api/v2/categories_news')
  .then((response) => response.json())
  .then((res) => {
    const data = res.data;
    renderMenus(data);
  });

fetch('https://apiforlearning.zendvn.com/api/v2/articles?limit=4')
  .then((response) => response.json())
  .then((res) => {
    const data = res.data;
    renderArticlesLatest(data);
  });

fetch('https://apiforlearning.zendvn.com/api/v2/articles/popular?limit=7')
  .then((response) => response.json())
  .then((res) => {
    const data = res.data;
    let htmlTop = '';
    let htmlBottom = '';
    // const dataTop = data.slice(0, 2);
    // const dataBottom = data.slice(2);
    data.forEach((item, index) => {
      if (index < 2) {
        htmlTop += /*html*/`
        <div class="col-6">
          <div class="card mb-4">
            <img src="${item.thumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
            </div>
          </div>
        </div>`;
      } else {
        htmlBottom += /*html*/`
        <div class="row">
          <div class="col-4">
            <img src="${item.thumb}" class="img-fluid rounded"
              alt="...">
          </div>
          <div class="col-8">
            <h4>${item.title}</h4>
            <p>${item.publish_date}</p>
          </div>
        </div>`;
      }
    });
    elArticlesPopularTop.innerHTML = htmlTop;
    elArticlesPopularBottom.innerHTML = htmlBottom;
  });

function renderArticlesLatest(list) {
  let html = '';
  list.forEach((item) => {
    html += `
    <div class="col-6">
      <div class="card mb-4">
        <img src="${item.thumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
        </div>
      </div>
    </div>`;
  });
  elArticlesLatest.innerHTML = html;
}

function renderMenus(list) {
  let html = '';
  list.forEach((item) => {
    html += `
    <li class="nav-item">
      <a class="nav-link" href="#">${item.name}</a>
    </li>`;
  });
  elMainMenu.innerHTML = html;
}
