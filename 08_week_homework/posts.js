function createPost(post) {

    var postItem = document.createElement('div')
    postItem.setAttribute("id", post.id)
    postItem.style.color = "white"
    var titleH2 = document.createElement('h2')
    titleH2.innerText = post.title;

    var textP = document.createElement('p');
    textP.innerText = post.text.length > 150 ? post.text.substring(0, 150) + "...": post.text ;


    var deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete";
    deleteBtn.style.borderRadius = "7px"
    deleteBtn.style.backgroundColor = "white"
    deleteBtn.setAttribute("class", "delete-post")

    deleteBtn.addEventListener('click', deletePost)
   

    postItem.appendChild(titleH2);
    postItem.appendChild(textP);
    postItem.appendChild(deleteBtn);

    return postItem;
}

function deletePost(event) {
    let parentId = event.target.parentNode.id
    fetch('http://localhost:3000/posts/'+ parentId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then(deletedPost => {
       let postParent = document.getElementById('posts-container')
       let postToBeRemoved = document.getElementById(deletedPost.id)
       postParent.removeChild(postToBeRemoved);
    }) 
}

function displayPosts() {
    fetch('http://localhost:3000/posts', { method: 'GET' })
        .then((response) => {
            return response.json();
        })
        .then(posts => {
            console.log(posts)

            var postListHTML = document.getElementById('posts-container')
            for (let index = 0; index < posts.length; index++) {
                var currentPost = posts[index];
                var postHTML = createPost(currentPost);
                postListHTML.appendChild(postHTML);
            }
        })
}
displayPosts();



var addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', function () {
var inputTitle = document.getElementById('title')
var inputText = document.getElementById('text')
addPost(inputTitle.value, inputText.value);
inputTitle.value = "";
inputText.value = "";
})

function addPost(title, text){
    var newPost = {title: title, text: text};
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })  
    .then((response) => {
        return response.json();
    })
    .then(post => {
       let newPost = createPost(post);
       postParent = document.getElementById('posts-container');
       postParent.appendChild(newPost);
            })
}
