// Boundary Framework videos.
// To show a video, add its YouTube ID (the part after "v=" in the link) to this list.
// Example: https://www.youtube.com/watch?v=AbC123xyz  ->  { id: "AbC123xyz", title: "What is the Boundary Framework?" }
// While the list is empty, the page shows a "Video coming soon" slot.
const VIDEOS = [
  // { id: "YOUTUBE_ID", title: "Video title" },
];

(function renderVideos() {
  const grid = document.getElementById("video-grid");
  if (!grid || VIDEOS.length === 0) return; // keep the placeholder

  const safeId = /^[A-Za-z0-9_-]{6,20}$/;
  grid.innerHTML = "";

  VIDEOS.filter((v) => safeId.test(v.id)).forEach((video) => {
    const item = document.createElement("figure");
    item.style.margin = "0";

    const frame = document.createElement("div");
    frame.className = "video-frame";

    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + video.id + "?rel=0";
    iframe.title = video.title || "Boundary Framework video";
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    frame.appendChild(iframe);
    item.appendChild(frame);

    if (video.title) {
      const caption = document.createElement("figcaption");
      caption.className = "video-title";
      caption.textContent = video.title;
      item.appendChild(caption);
    }

    grid.appendChild(item);
  });
})();
