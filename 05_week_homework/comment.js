
var username = ""
var text =""
var comment1 = {username: "Dannnnniel",
text: "zzzzzzz"
}

/*var commentList = [
    comment1,
    {
        username: "andrei",
        text: "aaaaasd sasssssssssss"
    },
    {
        username: "paul",
        text: "ssssssssss ddddddddddd a"
    }
]
*/

function newCommentItemDiv (img, username, text){ 

var commentItemDiv = document.createElement('div')
commentItemDiv.style.background = "lightblue";

var img = document.createElement('img');
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWhL0iECSCzelorKSeX8VzL9xNPtxawbmuaZhfR5YFrh1DuX3sUaDhsf9fSYZafY7ziY&usqp=CAU";

img.style.width = '30px';
img.style.height = '30px';
img.style.borderRadius = '50%';


var commentUsernameH2 = document.createElement('h2')
commentUsernameH2.innerText = username;

var commentTextP = document.createElement('p')
commentTextP.innerText = text;

commentItemDiv.appendChild(img)
commentItemDiv.appendChild(commentUsernameH2)
commentItemDiv.appendChild(commentTextP)

return commentItemDiv
}

var  commentListContainer = []
for (var index = 0; index<commentListContainer.length; index++) {
    var commentItem = commentList[index];

    commentListContainer = document.getElementById('commentlist')
    var commentItemDiv1 = newCommentItemDiv ("","")
    commentListContainer.appendChild(commentItemDiv1)
}

var btn = document.getElementById('add');
var inputUsername = document.getElementById('username')
var inputText = document.getElementById('comentariu')
var img = document.getElementById('img')

btn.addEventListener('click', function (event) {
    var commentListContainer = document.getElementById('commentlist')
    var commentItemDiv1 = newCommentItemDiv (inputUsername.value, inputText.value);
    commentListContainer.appendChild(commentItemDiv1)
})
