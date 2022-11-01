const ul = document.createElement('ul');


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(function(res){
//     return res.json();
// })
// .then(function(data){
//     console.log(data);
    
//     data.forEach(function(post){
//         const li = document.createElement('li');
//         li.innerText = post.title;
//         ul.append(li);
//     });
//     document.body.append(ul);
// });


async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

const data = await response.json();
console.log(data);

data.forEach(function(post){
    const li = document.createElement('li');
    li.innerText = post.title;
    ul.append(li);
});
document.body.append(ul);
}

loadData();
// setTimeout(function(){
//     console.log('linea 2');
// },3000);