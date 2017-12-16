jQuery(document).ready(function($) {
	function move_block(x,y,target){
		var side;
		if (x>0 || x<0) {
			$(target).css("left",x+"px");
		}
		if(y>0 || y<0){
			$(target).css("top",y+"px");
		}
		if($(target).hasClass('info-box-left')){
			side=" .left-line";
		}
		else{
			side=" .right-line";
		}
		if(($(".experience .mid-line").offset().left- $(target).offset().left)>=0){
			if($(target+side).css('transform') != null){
				$(target+side).css({
					"transform": "unset"
				});
			}
			$(target+side).css("width",($(".experience .mid-line").offset().left- $(target).offset().left)+"px");
		}
		else{
			if($(target+side).css('transform') == null){
				$(target+side).css({
					"transform": "rotate(180deg)",
					"transform-origin": "top left"
				});
			}
			$(target+side).css("width",(($(".experience .mid-line").offset().left- $(target).offset().left)*-1)+"px");
		}
		return true;
	}
});