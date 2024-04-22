import { getPosts } from "./api.js";

document.addEventListener("DOMContentLoaded", async function() {
    // Sample data
    const username = "user1";
    const postsData = await getPosts();
    // [
    //   { imageUrl: "scripts/test_res/land.jpeg", poser: "p1", time: "12.00", likes: 100,
    //     comment:[{commenter:"commenter1", commentText:"i like cat too"},
    //             {commenter:"commenter25843275970", commentText:"i dont like cat i like dog alsdjflkajsldfj;lajs"}]},
    //   { imageUrl: "scripts/test_res/land.jpeg", poser: "p2", time: "50.00", likes: 200,
    //     comment:[{commenter:"commenter3", commentText:"i like cat too" }]},
    //   { imageUrl: "test_res/1.png", poser: "p3", time: "5.00", likes: 3,
    //     comment:[{commenter:"commenter4", commentText:"i like cat too" }]}
    // ];

    // sort data for highligh feed
    if (document.title == "highlight feed") {
      postsData.sort((postA, postB) => postB.likes - postA.likes);
    }

    //render things
    const account = document.getElementById("username");
    account.innerText = "account:" + username;
    const postsContainer = document.getElementById("postsContainer");
  
    function renderPosts() {
      postsData.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("postBox");
        
        // head
        const headerSection = document.createElement("div");
        headerSection.classList.add("headerPost")
        const posterElement = document.createElement("div");
        posterElement.classList.add("poster");
        posterElement.innerText = post.poster;
        const timeElement = document.createElement("div");
        timeElement.classList.add("time");
        timeElement.innerText = post.time;

        headerSection.appendChild(posterElement);
        headerSection.appendChild(timeElement);
        postElement.appendChild(headerSection);

        //image
        const imageElement = document.createElement("img");
        imageElement.src = post.imageUrl;

        postElement.appendChild(imageElement);

        //interact section
        const interactSection = document.createElement("div");
        interactSection.classList.add("interractSection");
        const likeBtn = document.createElement("button");
        likeBtn.innerText = "like";
        const likesElement = document.createElement("div");
        likesElement.classList.add("likes");
        likesElement.innerText = post.likes + "likes";
        const newCommentElement = document.createElement("input");
        newCommentElement.type = "text";
        newCommentElement.placeholder = "Add new comment";
        const sendCommentBtn = document.createElement("button");
        sendCommentBtn.innerText = "send";
        
        interactSection.appendChild(likesElement);
        interactSection.appendChild(likeBtn);
        interactSection.appendChild(newCommentElement);
        interactSection.appendChild(sendCommentBtn);
        postElement.appendChild(interactSection);
        
        //comments
        const commentSection = document.createElement("div");
        commentSection.classList.add("commentSection");
        post.comments.forEach(comment => {
          const singleComment = document.createElement("div");
          singleComment.classList.add("singleComment");
          const commenterElement = document.createElement("div");
          commenterElement.innerText = comment.commenter;
          const commentTextElement = document.createElement("div");
          commentTextElement.innerText = comment.commentText;
          singleComment.appendChild(commenterElement);
          singleComment.appendChild(commentTextElement);
          commentSection.appendChild(singleComment)
        })
        postElement.appendChild(commentSection);
        
        postsContainer.appendChild(postElement);
      });
    }
  
    renderPosts();
  });