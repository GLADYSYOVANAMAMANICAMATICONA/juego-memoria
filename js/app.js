//////////////JQUERY///////////////////////
// $(document).ready(function(){
// 	var array_imagenes = ["a","a","b","b","c","c","d","d"];
// 	array_imagenes.sort(function(){return 0.5 - Math.random()});
// 	var html = '';
// 	var tmp = [];
// 	var i = 1;
// 	$.each(array_imagenes,function(key,value){
// 		html += '<li><span calss="value">'+value+'</span><span class="overlay"></apan></li>';
// 	});
// 	$('#contenedor').html(html);
// 	$('#contenedor li').click(function(){
// 		if(i>2){
// 			$('.selected').removeClass('selected');
// 			i =	1;
// 			tmp = [];
// 		}
// 		var $this = $(this);
// 		$this.addClass('selected');
// 		tmp.push($this.find('.value').text());
// 		if(tmp.length == 2 && tmp[0]) = tmp[1]){
// 			$('.selected').addClass('ok');
// 		}
// 		i++;
// 	});
// });
