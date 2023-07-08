const elMainMenu = document.getElementById("main-menu-content");
const elArticle = document.getElementById("newArticle");
const elArticleUp = document.getElementById("article-up");
const elArticleDowm = document.getElementById("article-down");
fetch('https://apiforlearning.zendvn.com/api/v2/categories_news').then((response) => response.json()).then((res) => {
    const data = res.data;
    createList(data);
});

//========AJAX==========//
// let xhttp="";
// if(window.XMLHttpRequest){
//     xhttp = new XMLHttpRequest();
// }else(
//     xhttp = new ActiveXObject("Microsoft.XMLHTTP")
// )

// xhttp.open("GET","https://apiforlearning.zendvn.com/api/v2/categories_news",false);
// xhttp.send();

// let resultXhttp = JSON.parse(xhttp.responseText);
// console.log(resultXhttp.data);
// let data1 = resultXhttp.data;
// createList(data1);


fetch('https://apiforlearning.zendvn.com/api/v2/articles?limit=4').then((response) => response.json()).then((res) => {
    const data = res.data;
    let html = "";
    data.forEach(todo => {
        html += `       
        <div class="col-6">
            <div class="card">
                <img src="${todo.thumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${todo.title}</h5>
                    <p class="card-text">${todo.description}
                    </p>
                </div>
            </div>
        </div>`


    })
    elArticle.innerHTML = html;

});

fetch('https://apiforlearning.zendvn.com/api/v2/articles/popular?limit=7').then((response) => response.json()).then((res) => {
    const data = res.data;
    console.log('data', data);
    
    // const data1 = data.slice(0,2);
    // const data2 = data.slice(2);
    // console.log('data2', data2);

    let htmlUp = "";
    let htmlDown = "";
    // data1.forEach(todo => {
    //     htmlUp += ` 
    //     <div class="col-6">
    //         <div class="card">
    //             <img src="${todo.thumb}" class="card-img-top" alt="...">
    //             <div class="card-body">
    //             <h5 class="card-title">${todo.title}</h5>
    //             <p class="card-text">${todo.description}
    //             </p>
    //       </div>
    //         </div>
    //     </div>     
    //     `
    // })
    // elArticleUp.innerHTML = htmlUp;

    // data2 .forEach(todo=>{
    //     htmlDown +=`
    //     <div class="row" >
    //     <div class="col-4">
    //       <img src="${todo.thumb}" class="img-fluid rounded"
    //         alt="...">
    //     </div>
    //     <div class="col-8">
    //       <h4>${todo.title}</h4>
    //       <p>${todo.publish_date}/p>
    //     </div>
    //   </div>
    //     `
    // })
    // elArticleDowm.innerHTML= htmlDown;
    data.forEach((item, index) => {
        if (index < 2) {
                htmlUp += ` 
                <div class="col-6">
                    <div class="card">
                        <img src="${item.thumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}
                        </p>
                  </div>
                    </div>
                </div>     
                `
        } else {
                htmlDown +=`
                <div class="row" >
                <div class="col-4">
                  <img src="${item.thumb}" class="img-fluid rounded"
                    alt="...">
                </div>
                <div class="col-8">
                  <h4>${item.title}</h4>
                  <p>${item.publish_date}/p>
                </div>
              </div>
                `
        }

    })
    elArticleUp.innerHTML = htmlUp;
    elArticleDowm.innerHTML= htmlDown;
});

function createList(items) {
    let html = "";
    items.forEach(item => {
        html += `
        <li class="nav-item">
              <a class="nav-link" href="#">${item.name}</a>
            </li>
        `
    });
    elMainMenu.innerHTML = html;
}
