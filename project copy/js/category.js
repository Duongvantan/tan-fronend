const elArticle = document.getElementById('category-ar');
const elPagination = document.getElementById('pagination');
const elH1 = document.getElementById('category-name');
let currentPage = 1;

//Lấy parameters from array
const queryString = window.location.search;
console.log(queryString); // ?param1=foo&param2=bar

const urlParams = new URLSearchParams(queryString);
let id = parseInt(urlParams.get('id'));

//=========ARTICLE===========//
fetchArticle();

elPagination.addEventListener("click", (e) => {
  e.preventDefault();
  let el = e.target;
  if (el.classList.contains('page-number')) {
    currentPage = parseInt(el.innerText);
    fetchArticle(currentPage);
    window.scrollTo(0, 0);
  }

  if (el.classList.contains('previous')) {
    console.log('currentPage', currentPage);
    currentPage--;
    fetchArticle(currentPage);
  }

  if (el.classList.contains('next')) {
    console.log('currentPage', currentPage);
    currentPage++;
    fetchArticle(currentPage);
  }
})

function renderPagination(totalPage) {
  let html = "";
  let disableNext = currentPage === totalPage ? "disabled" : "";
  let disabledPrevious = currentPage === 1 ? "disabled" : "";
  for (let i = 1; i <= totalPage; i++) {
    let active = currentPage === i ? 'active' : '';
    html +=/*html*/
      `<li class="page-item ${active}"><a class="page-link page-number" href="#">${i}</a></li>`
  }
  elPagination.innerHTML = /*html*/
    `<li class="page-item ${disabledPrevious}">
            <a class="page-link previous" href="#" aria-label="Previous">
            <span aria-hidden="true" class='previous'><i class="uil uil-arrow-left previous"></i></span>
            </a>
        </li>`+
    html +
    /*html*/
    `<li class="page-item ${disableNext}">
            <a class="page-link next" href="#" aria-label="Next">
            <span aria-hidden="true" class="next"><i class="uil uil-arrow-right next"></i></span>
            </a>
        </li>`;
}

function renderArticle(arrData) {
  let html = "";
  arrData.forEach(item => {
    let publishDate = item.publish_date;
    let date = moment(publishDate, "YYYY-MM-DD");
    console.log(date.fromNow());
    html +=/*html*/
      `<article class="item post col-md-6 col-lg-4">
        <div class="card h-100">
          <figure class="card-img-top overlay overlay-1 hover-scale">
            <a href="#">
              <img src="${item.thumb}" alt="">
            <span class="bg"></span></a>
            <figcaption>
              <h5 class="from-top mb-0">Read More</h5>
            </figcaption>
          </figure>
          <div class="card-body">
            <div class="post-header">
              <!-- /.post-category -->
              <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" href="./blog-post.html">${item.title}</a></h2>
            </div>
            <!-- /.post-header -->
            <div class="post-content">
              <p>${item.description}</p>
            </div>
            <!-- /.post-content -->
          </div>
          <!--/.card-body -->
          <div class="card-footer">
            <ul class="post-meta d-flex mb-0">
              <li class="post-date"><i class="uil uil-calendar-alt"></i><span>${date.fromNow()}</span></li>
              <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>${item.status}</a></li>
              <li class="post-likes ms-auto"><a href="#"><i class="uil uil-heart-alt"></i>5</a></li>
            </ul>
            <!-- /.post-meta -->
          </div>
          <!-- /.card-footer -->
        </div>
        <!-- /.card -->
      </article>`
  });
  elArticle.innerHTML = html;
}

function fetchArticle(page = 1) {
  API.get(`categories_news/${id}/articles?limit=6&page=${page}`)
    .then((res) => {
      const data = res.data.data;
      const totalPage = res.data.meta.last_page;
      const category = res.data.data[0].category.name;
      elH1.innerText = category;
      renderArticle(data);
      renderPagination(totalPage);
    })
}
