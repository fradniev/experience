jQuery(document).ready(function($) {
	$(".email").bind('input', function() {
		if($(this).val()!=""){
			$(".ok-button-"+$(this).data("number")).addClass('show');
		}
		else{
			if($(".ok-button-"+$(this).data("number")).hasClass('show')){
				$(".ok-button-"+$(this).data("number")).removeClass('show');
			}
		}
	});
});