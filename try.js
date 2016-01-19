// extracting text from text area
count();
$('body').on('keypress','#task_input',function(event)
{
	if(event.which===13 && $(this).val()!=="")
	{
		var value=$(this).val();

		$('#content').prepend('<div class="tasks active"><input type="checkbox" value="none" class="checkbox mark_com"/><p></p><button type="button" class="delete"><strong>X</strong></button></div>');
		$('#content div:first').find('p').append(value);
		$(this).val('');
		count();
	}

});


// delete action


$('body').on('click', '.delete', function() {
	$(this).closest('.tasks').remove();
	count();
    // do something
});


// move active to completed or vice-versa by checkbox


	$('#content').on('click','input[type="checkbox"]',function(event)
{
    if(this.checked)
      	{
            $(this).parent().removeClass('active').addClass('completed');
        }
    else
        {
        	$(this).parent().removeClass('completed').addClass('active');
        }
        count();

 });







// mark all classes completed
// if($(this).prop("checked")===true)
// else if($(this).prop("checked") === false)

$('#mark_all').click(function(event){

	
			$('.mark_com').attr('checked',this.checked);
			if(this.checked)
			{
				$('.tasks').removeClass('active').addClass('completed');
				 count();
		
			}
			else
			{
        		$('.tasks').removeClass('completed').addClass('active');
        		 count();
    		}
    	
   
    

   

});






// clicking footer buttons


	$('#all_tasks').click(function(event){
	activeTab(event.target);
	$('.active,.completed').each(function(){
		$(this).removeClass('hidden');});
	count();
	});

$('#active_tasks').click(function(event){
	activeTab(event.target);
	$('.completed').each(function(){
		$(this).addClass('hidden');
		
	});
	$('.active').each(function(){
		$(this).removeClass('hidden');
		

	});
	
	count();

});




	$('#comp_tasks').click(function(event){
	activeTab(event.target);
	$('.active').each(function(){
		$(this).addClass('hidden');
		count();

	});
	$('.completed').each(function(){
		$(this).removeClass('hidden');
		count();

	});


});


$('#clear_tasks').click(function(event) {
	activeTab(event.target);
	$('.completed').remove();
	count();
});





// number of tasks left
function count(){
var c=$('.active').length;
$('#n_tasks').remove();
$('#tasksleft').append('<span id="n_tasks">' + c + ((c==1) ? ' task' : ' tasks') + ' left</span>');
	if($('.tasks').length>0)
		{
			$('#footer').removeClass('hidden');
				if(c===0)
				{
					$('#mark_all').attr('checked',true);
				}
				else if(c>0)
				{
					$('#mark_all').attr('checked',false);
				}
		}
	else{
			$('#footer').addClass('hidden');
		}
}



// Show selected tab

function activeTab(item){
		$('#footer button').each(
			function(){
				$(this).removeClass('isActive');
			});
		$(item).addClass('isActive');

		
		
}

// other functions

// function misc(e){

//  }