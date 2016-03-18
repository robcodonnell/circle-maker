var $html = $('html');
var $body = $('body');

$html.on('keydown', function (e) {
  var div = $('<div>');

  $body.append(div);
  div.addClass('ball');
  div.css('top', Math.random() * 1000);
  div.css('left', Math.random() * 1000);
});
