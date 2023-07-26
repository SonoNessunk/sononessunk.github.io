function openPopup(videoUrl) {
  var popup = document.getElementById('popup');
  var popupVideo = document.getElementById('popupVideo');
  popupVideo.src = videoUrl;
  popup.style.display = 'block';
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var popupHeight = popup.offsetHeight;
  var offset = (windowHeight - popupHeight) / 2;
  popup.style.top = offset + 'px';
}

function closePopup() {
  var popup = document.getElementById('popup');
  var popupVideo = document.getElementById('popupVideo');
  popupVideo.pause();
  popupVideo.currentTime = 0;
  popup.style.display = 'none';
}
