const elNews = document.getElementById("main-menu-content");
const elArticleNew = document.getElementById("articles-latest");
const elArticleUp = document.getElementById("articles-popular-top");
const elArticleBottom = document.getElementById("articles-popular-bottom");
const elLoadMore = document.getElementById("btn-load-more");

let currentPage = 1;

const api = axios.create({
    baseURL: "https://apiforlearning.zendvn.com/api/v2/"
});

api.get("categories_news")
    .then((resp) => {
        let data = resp.data.data;
        rederMenu(data)
    })

fetchMoreArticle(page = 1);

api.get("articles/popular?limit=7")
    .then((res) => {
        let data = res.data.data;
        rederArticleTopBottom(data);
    })

elLoadMore.addEventListener("click", () => {
        currentPage++;
        elLoadMore.innerText = "Đang Tải..."
        elLoadMore.disable = true;
        fetchMoreArticle(currentPage)
})

function fetchMoreArticle(page = 1) {
    api.get(`articles?limit=4&page=${page}`)
    .then((res) => {
        let data = res.data.data;
        if(currentPage===1) elArticleNew.innerHTML ="";
        renderArticleBetween(data);
        elLoadMore.innerText = "Xem Thêm"
        elLoadMore.disable = false;
    })
}
function rederMenu(arrData) {
    let htmlContent = "";
    let htmlMenu = "";
    arrData.forEach((item, index) => {
        if (index <= 2) {
            htmlContent +=
                `<li class="nav-item">
                        <a class="nav-link" href="#">${item.name}</a>
                    </li>
                    `
        } else {
            htmlMenu += `
                    <li><a class="dropdown-item" href="#">${item.name}</a></li>
                `
        }
    });
    elNews.innerHTML = htmlContent + /*html*/
        `<li class="nav-item dropdown" id="other-News">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            ${"Danh mục khác"}
            </a>
            <ul class="dropdown-menu" id="drop-menu">
            ${htmlMenu}
            </ul>
      </li>`;
}

function renderArticleBetween(arrData) {
    let html = "";
    arrData.forEach(item => {
        html += /*html*/
            `
            <div class="col-6 article">
            <div class="card mb-4 h-100">
              <img src="${item.thumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text line-clamp line-clamp-4">${item.description}</p>
              </div>
            </div>
          </div>
            `
    })
    elArticleNew.innerHTML += html;
}

function rederArticleTopBottom(arrData) {
    let htmlUp = "";
    let htmlBottom = "";
    arrData.forEach((item, index) => {
        if (index <= 1) {
            htmlUp += /*html*/
                `
            <div class="col-6">
                <div class="card h-100">
                <img src="${item.thumb}" class="card-img-top h-100" alt="...">
                <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}
              </p>
            </div>
          </div>
        </div>
            `
        } else {
            htmlBottom += /*html*/
                `
                <div class="row">
                <div class="col-4">
                  <img src="${item.thumb}" class="img-fluid rounded"
                    alt="...">
                </div>
                <div class="col-8">
                  <h4 class="line-clamp-1 line-clamp" title="${item.title}">${item.title}</h4>
                  <p>${item.publish_date}</p>
                </div>
              </div>
                `
        }
    })
    elArticleUp.innerHTML = htmlUp;
    elArticleBottom.innerHTML = htmlBottom;
}