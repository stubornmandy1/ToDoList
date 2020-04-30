// check of specific todos by clicking
$("ul").on("click", "li",function() {
$(this).toggleClass("done");

});

// click in X to delete todo
$("ul").on("click","span",function(event){
	// .parent() will remove li followed by X clicked on.
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// stopPropagation is to stop applying function to parent tags. 
	event.stopPopagation();
});

$("input[type='text']").keypress(function(){
	if (event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//add new li to ul .append is use
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")

	}
});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();	
})