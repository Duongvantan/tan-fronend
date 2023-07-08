const elArticle = document.getElementById("category-ar");


const queryString = window.location.search;
console.log(queryString); // ?param1=foo&param2=bar
const urlParams = new URLSearchParams(queryString);

const keyWord1 = urlParams.get('keyword');
const keyWord = encodeURIComponent(urlParams.get('keyword'));



API.get(`articles/search?q=${keyWord}&limit=6&page=1`)
.then((res)=>{
    let data = res.data.data;
    renderArticle(data);
})

function renderArticle(arrData) {
    let html = "";
    arrData.forEach(item => {
        let content = item.description;
        let patt = new RegExp(keyWord1,"img");
        content = content.replace(patt, (match)=>{
            return `<mark>${match}</mark>`;
        })

        let publishDate = item.publish_date;
        let date = moment(publishDate, "YYYY-MM-DD");
        console.log(date.fromNow());
        html += /*html*/
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
                <p>${content}</p>
            </div>
            <!-- /.post-content -->
        </div>
        <!--/.card-body -->
        <div class="card-footer">
            <ul class="post-meta d-flex mb-0">
                <li class="post-date"><i class="uil uil-calendar-alt"></i><span>${date.fromNow()}</span></li>
                <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>${item.status}</a></li>
                <li class="post-likes ms-auto"><a href="#"><i class="uil uil-heart-alt"></i>${item.views}</a></li>
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