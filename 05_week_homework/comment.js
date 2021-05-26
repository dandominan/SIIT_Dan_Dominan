function newCommentItemDiv (img, username, text){ 
    
    var commentItemDiv = document.createElement('div')
    commentItemDiv.style.background= "rgb(185, 127, 123)";
    commentItemDiv.style.borderRadius = "12px"

    var contt = document.createElement('div')
    contt.style.display = "flex";
    contt.style.alignItems="center";
    contt.style.height="40px"
    contt.style.marginLeft="3px"


    var imagine = document.createElement('img')
    imagine.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWhL0iECSCzelorKSeX8VzL9xNPtxawbmuaZhfR5YFrh1DuX3sUaDhsf9fSYZafY7ziY&usqp=CAU";
    
    var commentUsernameH2 = document.createElement('h2')
    commentUsernameH2.innerText = username;
    
    var commentTextP = document.createElement('p')
    commentTextP.innerText = text;
    commentTextP.style.marginLeft = "7px";
    commentTextP.style.paddingBottom= "20px"
    commentTextP.style.paddingLeft= "20px"
    
    commentItemDiv.appendChild(contt)
    commentItemDiv.appendChild(commentTextP)
    contt.appendChild(imagine)
    contt.appendChild(commentUsernameH2)
    
    return commentItemDiv
    }

var btn = document.getElementById('add');
var inputUsername = document.getElementById('user')
var inputText = document.getElementById('comentariu')
var img = document.getElementById('avatar')

btn.addEventListener('click', function() {
    var commentListContainer = document.getElementById('commentlist')
    var commentItemDiv1 = newCommentItemDiv (img.value, inputUsername.value, inputText.value);
    commentListContainer.appendChild(commentItemDiv1)
})