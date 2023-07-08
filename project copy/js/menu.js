const elNavbar = document.getElementsByClassName("nav-menu");


const searchForm = document.getElementsByClassName("searchForm");
for(let i =0; i < searchForm.length;i++){
  searchForm[i].addEventListener("submit", (e)=>{
    e.preventDefault();
    let inputKeyword = searchForm[i].querySelector('[name="keyword"]');
    let keyWord = encodeURIComponent(inputKeyword.value);
    window.location.href = `search.html?keyword=${keyWord}`;
  })
}

API.get("categories_news")
  .then((res)=>{
    const data = res.data.data;
    renderMenu(data);
  })

function renderMenu(arrData) {
    let htmlMenu = "";
    let htmlDropMenu = "";
  
    arrData.forEach((item, index) => {
      if (index <= 2) {
        htmlMenu += /*html*/
          `
            <li class="nav-item">
                <a class="nav-link" href="category.html?id=${item.id}">${item.name}</a>
            </li>
            `
      } else {
        htmlDropMenu += /*html*/
          `
            <li class="nav-item"><a class="dropdown-item" href="category.html?id=${item.id}">${item.name}</a></li>
            `
      }
    });
  
    for (let i = 0; i < elNavbar.length; i++) {
  
      // elNavbar[i].innerHTML = htmlMenu + htmlLi;
      // console.log(elNavbar[i].innerHTML);
  
      // const elListSelect = document.getElementsByClassName("list-select");
  
      // elListSelect[i].innerHTML = htmlDropMenu;
      elNavbar[i].innerHTML = htmlMenu + /*html*/`
        <li class="nav-item dropdown nav-select">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Danh Mục Khác</a>
          <ul class="dropdown-menu list-select">
          ${htmlDropMenu}
          </ul>
        </li>
      `;
    }
  }
  