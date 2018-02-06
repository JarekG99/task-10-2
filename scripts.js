// scripts.js

var span = $("span");
    span.each(function(index, element) {
      if(index % 2 == 0) {
		   $(element).css('color', 'red');
	};
});

var paragraphs = $("p");
paragraphs.each(function(index, element) {
  var button = '<button class="btn, btn-info" data-tmp="' + (index+1) + '">Click me</button>';

  $(element).append(button);
});

$("button").click(function(){
  alert("button number " + $(this).attr("data-tmp"));
});
