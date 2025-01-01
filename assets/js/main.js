const fileInput = document.querySelector("input"),
donwloadBtn = document.querySelector("button");

donwloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    donwloadBtn.innerHTML = "Downloading file.....";
    fetchFile(fileInput.value);
    
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file =>  {
        let tUrl = URL.createObjectURL(file)
        let aElement = document.createElement("a");
        aElement.href = tUrl;
        aElement.download = "filename";
        document.body.appendChild(aElement);
        aElement.click();
        aElement.remove();
        URL.revokeObjectURL(tUrl);
        donwloadBtn.innerHTML = "Download File";
        fileInput.value = "";
    }).catch(() => {
        donwloadBtn.innerHTML = "Download File";
        alert("Download Failed - The website's CORS policy, such as those of YouTube, SoundCloud, and Spotify, prevented access");
    });
}