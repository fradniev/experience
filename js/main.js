jQuery(document).ready(function($) {
	function move_block(x,y,target){
		/* variable that detect what side is the block */
		var side;
		/* move the block to "x" px to the left */
		$("#"+target).css("left",x+"px");
		/* move the block to "y" px to the bottom */
		$("#"+target).css("top",y+"px");
		/* if it has left class, save left in the side variable, if not, save right */
		if($("#"+target).hasClass('info-box-left')){
			side=" .left-line";
		}
		else{
			side=" .right-line";
		}
		/* wait for 1 sec to wait for animation to stop and then start new animation */
		setTimeout(
			function() 
			{
				/* check if moving the block has a negative offset */
				if(($(".experience .mid-line").offset().left- $("#"+target).offset().left)>=0){
					/* check if it has the transform property */
					if($("#"+target+side).css('transform') != null){
						/* unset the transform property */
						$("#"+target+side).css({
							"transform": "unset"
						});
					}
					/* I'm changing the width to always touch the line */
					$("#"+target+side).css("width",($(".experience .mid-line").offset().left- $("#"+target).offset().left)+"px");
				}
				else{
					/* check if already have a transform */
					if($("#"+target+side).css('transform') == "none"){
						/* I'm rotating the line so it touch the line when it increases the width */
						$("#"+target+side).css({
							"transform": "rotate(180deg)",
						});
					}
					/* I'm changing the width to always touch the line, and multiplying with -1 to make it positive */
					$("#"+target+side).css("width",(($(".experience .mid-line").offset().left- $("#"+target).offset().left)*-1)+"px");
				}
				return true;
			}, 
		1000);
	}
});