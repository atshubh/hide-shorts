let lastUrl = location.href;

new MutationObserver((mutationList) => {
  const url = location.href;
  console.info(url, lastUrl);
  if (url !== lastUrl) {
    lastUrl = url;
    removeShorts();
  }

  if (mutationList.some((mutation) => mutation.type === "childList")) {
    removeShorts();
  }
}).observe(document, {
  subtree: true,
  childList: true,
});

function removeShorts() {
  const shortsElementsToHide = [
    document.querySelector('ytd-guide-entry-renderer:has([title="Shorts"])'),
    document.querySelector(
      'ytd-mini-guide-entry-renderer:has([title="Shorts"])'
    ),
  ];

  shortsElementsToHide.forEach((element) => {
    if (element) {
      element.style.display = "none";
    }
  });

  const shortsVideos = document.querySelectorAll(
    'ytd-grid-video-renderer:has(a[href^="/shorts/"])'
  );

  if (shortsVideos) {
    shortsVideos.forEach((shortsVideo) => {
      shortsVideo.style.display = "none";
    });
  }
}
