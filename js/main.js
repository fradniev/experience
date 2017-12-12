jQuery(document).ready(function($) {
	function move_block(x,y,target){
		if (x>0 || x<0) {
			$(target).css("left",x+"px");
		}
		if(y>0 || y<0){
			$(target).css("top",y+"px");
		}
		console.log($(".experience .mid-line").offset().left- $(target+' .left-line').offset().left);
		$(target+' .left-line').css("width",($(".experience .mid-line").offset().left- $(target).offset().left)+"px");

		return true;
	}
});