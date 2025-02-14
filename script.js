btn = document.getElementById("doggy");

btn.addEventListener("click", (e)=>{
    img = document.getElementById("img-gen");

    let url = "";
    const apiUrl = "https://random.dog/woof.json";
    fetch(apiUrl)
        .then(response=>response.json())
        .then(data => {
            url = data.url;
            img.src = url;
            console.log(url)
        })
        .catch(error=>
            img.src = "images/placeholder.jpg"
        )
})

let followerEnabled = false; 

document.addEventListener("mousemove", function(event) {
    if (!followerEnabled) return; 
    let emoji = document.getElementById("emoji-follower");
    emoji.style.left = event.clientX + "px";
    emoji.style.top = event.clientY + "px";
});

document.getElementById("toggle-follower").addEventListener("click", function() {
    followerEnabled = !followerEnabled; 
    this.textContent = followerEnabled ? "Disable Follower" : "Enable Follower"; 
    document.getElementById("emoji-follower").style.display = followerEnabled ? "block" : "none"; 
});