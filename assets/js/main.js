const fileInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = fileInput.value.trim();
    if (!url) return;
    downloadBtn.textContent = "Downloading...";
    downloadBtn.disabled = true;
    fetchFile(url);
});

function fetchFile(url) {
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error: ${res.status}`);
            }
            return res.blob();
        })
        .then((file) => {
            const urlParts = url.split("/");
            const filename = urlParts[urlParts.length - 1].split("?")[0] || "download";
            const tUrl = URL.createObjectURL(file);
            const aElement = document.createElement("a");
            aElement.href = tUrl;
            aElement.download = filename;
            document.body.appendChild(aElement);
            aElement.click();
            aElement.remove();
            setTimeout(() => URL.revokeObjectURL(tUrl), 100);
            downloadBtn.textContent = "Download File";
            downloadBtn.disabled = false;
            fileInput.value = "";
        })
        .catch((err) => {
            downloadBtn.textContent = "Download File";
            downloadBtn.disabled = false;
            const message = err.message === "Failed to fetch"
                ? "Download Failed — This site's CORS policy blocked the request (e.g. YouTube, Spotify, SoundCloud)."
                : `Download Failed — ${err.message}`;
            alert(message);
        });
}