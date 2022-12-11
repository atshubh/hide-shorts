onUrlChange()

let lastUrl = location.href; 
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange();
  }
}).observe(document, {subtree: true, childList: true});

function onUrlChange() {
    const shortsElementsToHide = [
        document.querySelector('ytd-guide-entry-renderer:has([title=\"Shorts\"])'),
        document.querySelector('ytd-mini-guide-entry-renderer:has([title=\"Shorts\"])')
    ]
    
    
    shortsElementsToHide.forEach((element) => {
        if(element) {
            element.style.display = "none"
        }
    })
    
    const shortsVideos = document.querySelectorAll('ytd-grid-video-renderer:has(a[href^="/shorts/"])')
    
    if(shortsVideos) {
        shortsVideos.forEach((shortsVideo) => {
            shortsVideo.style.display = "none"
        })
    }
}



