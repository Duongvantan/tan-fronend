
// 1.new Promise
// 2.executor

//(in promise) không sử dụng catch trong promise
//Ba trạng thái của Promise
// 1.pendding
// 2.fulfilled
// 3.reject
//================DEMO===========//

// var promise = new Promise(
//     //Excutor
//     function (resolve, reject) {
//         //Logic
//         //Thành công: resolve()
//         //Thất bại:   reject()

//         //Fake call API
//         resolve([
//             {
//                 id : 1,
//                 name: "javascript",
//             }
//         ]);

//         // reject("CÓ LỖI");
//     }
// );

// promise
//     .then(function () {
//         return new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve([1,2,3]) 
//             }, 3000);
//         })
//     })
//     .then(function (data) {
//         console.log(data);
//         return 2;
//     })
//     .then(function (data) {
//         console.log(data);
//         return 3;
//     })
//     .then(function (data) {
//         console.log(data);
        
//     })
//     .catch(function (error) {
//         console.log(error);

//     })
//     .finally(function () {
//         console.log('Done!');

//     })


//============PROMISE CHAIN============//
/*
    function sleeping(ms) {
        return new Promise((resolve, reject)=>{
            setTimeout(resolve,ms)
        })
    }

    sleeping(1000)
        .then(()=>{
            console.log('1');
            return sleeping(1000);
        })
        .then(()=>{
            console.log('2');
            return new Promise((resolve, reject)=>{
                reject("Hệ thống bị lỗi");
            })
        })
        .then(()=>{
            console.log('3');
            return sleeping(1000);
        })
        .catch((error)=>{
            console.log(error);
            error
        })
        */

//===============PROMISE=============//

// 1.Promise.resolve
// 2.Promise.reject
// 3.Promise.all


//Thư viện: output luôn luôn là một thư viện
// let promise = new Promise((resolve, reject) => {
//     // resolve("SUCCESSFUL!");
//     reject("Hệ thống bị lỗi");
// })
// let promise = Promise.resolve("SUCCESSFULL!");
// let promise = Promise.reject("error!");

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((result)=>{
//         console.log(result);
        
//     })


// var promise1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve([1])
//     },2000);
// })

// var promise2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve([1,2,3])
//     },5000);
// })
// //Khi nào 1,2 xong thì mới vào all
// Promise.all([promise1,promise2]).then((result)=>{
//     let result1 = result[0];
//     let result2 = result[1];
//     console.log(result1.concat(result2));
    
// })

var users = [
    {
        id:1,
        name: 'Kien Dam',
    },
    {
        id:2,
        name: 'Son Dang',
    },
    {
        id:3,
        name: 'Hung Dam',
    }
];

var comments =[
    {
        id: 1,
        user_id: 1,
        comment:'Anh Son chua ra video :(',
    },
    {
        id: 2,
        user_id: 2,
        comment:'Vua ra xong em ơi!',
    }
]

//Lấy comment
//Từ Comment lấy ra được user_id
//Từ user_id lấy được user tương ứng

//Fake API
function getComments() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(comments)
        },1000);
    })
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        let result = users.filter(function(user){
            return userIds.includes(user.id)
        })
        setTimeout(function () {
            resolve(result)
        },1000);
    })
}
getComments()
            .then(function (comments) {
                let userIds = comments.map(function (comment) {
                    return comment.user_id;
                })
               return getUsersByIds(userIds)
                    .then(function (user) {
                       return{
                            users: user,
                            comments: comments,
                       }
                    })
            })
            .then(function(data){
                const elList = document.getElementById("comment-block");
                let html="";
                data.users.forEach(user => {
                    let comment = data.comments.find(comment=>{
                        return comment.user_id === user.id;
                    })
                    html+=`<li>${user.name}: ${comment.comment}</li>
                    `
                });
                elList.innerHTML = html;
            })

