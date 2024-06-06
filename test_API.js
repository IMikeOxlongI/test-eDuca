var request = require('sync-request');
var res = request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');

var data = JSON.parse(res.getBody('utf8'));

for (const comment of data) {
    console.log(comment.body)
   
}
/* 

comments.forEach(comment => {
    console.log(`ID: ${comment.id}`);
    console.log(`Name: ${comment.name}`);
    console.log(`Email: ${comment.email}`);
    console.log(`Body: ${comment.body}`);
    console.log("\n" + "-".repeat(50) + "\n");
  }); */