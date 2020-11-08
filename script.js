$("#play-video").on("click", function (e) {
    e.preventDefault();
    $("#video-overlay").addClass("open");
    $("#video-overlay").append(

    );
  });
  
  $(".video-overlay, .video-overlay-close").on("click", function (e) {
    e.preventDefault();
    close_video();
  });
  
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      close_video();
    }
  });
  
  function close_video() {
    $(".video-overlay.open").removeClass("open").find("iframe").remove();
  }
  