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