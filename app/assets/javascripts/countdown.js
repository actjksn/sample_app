function updateCountdown() {
  // 140 is max message length
  var remaining = 140 - jQuery('.micropost-form').val().length;
  jQuery('.countdown').text(remaining + ' characters remaining...');
}

jQuery(document).ready(function($) {
  updateCountdown();
  $('.micropost-form').change(updateCountdown);
  $('.micropost-form').keyup(updateCountdown);
});