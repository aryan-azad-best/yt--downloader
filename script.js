function downloadVideo() {
    let url = document.getElementById("video-url").value;
    let format = document.getElementById("format").value;
    let resolution = document.getElementById("resolution").value;

    if (!url) {
        alert("Please enter a YouTube video URL!");
        return;
    }

    // Simulated API request (Replace with actual backend API)
    document.getElementById("status").innerText = "Processing download...";

    setTimeout(() => {
        document.getElementById("status").innerText = `Downloading video in ${format} (${resolution})...`;
    }, 2000);
}
