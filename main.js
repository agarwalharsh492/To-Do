// extracting text from text area

count();
$('body').on('keypress','#task_input',function(event){
	if(event.which===13 && $(this).val()!=="")
	{
		var value=$(this).val();
		$('#content').prepend('<div class="tasks active"><input type="checkbox" value="none" class="checkbox mark_com"/><p></p><button type="button" class="delete"><strong>X</strong></button></div>');
		$('#content div:first').find('p').append(value);
		$(this).val('');
		if($('.isActive').html()==$('#comp_tasks').html())
		{
			$('#content div:first').addClass('hidden');					//not to show new tasks when added in completed tab
		}
		count();
	}
});


// delete action


$('body').on('click', '.delete', function(e){
	$(this).closest('.tasks').remove();
	count();
});


// move active to completed or vice-versa by checkbox


$('#content').on('click','input[type="checkbox"]',function(event){

	if(this.checked)
	{
		$(this).parent().removeClass('active').addClass('completed');
		count();
	}
	else
	{
		$(this).parent().removeClass('completed').addClass('active');
		count();
	}
	if($('.isActive').html()==$('#active_tasks').html() || $('.isActive').html()==$('#comp_tasks').html())
	{
		$(this).parent().addClass('hidden');
	}
	markCheckBox();
});

function markCheckBox(){
	if($('.tasks').length === $('.completed').length && $('.tasks').length !== 0)
	{
		$('#mark_all').prop('checked',true);
	}
	else
	{
		$('#mark_all').prop('checked',false);
	}
	
}


// mark all classes completed



$('#mark_all').click(function(event){
	
	if(this.checked)
	{
		$('.tasks').removeClass('active').addClass('completed');
		$('.mark_com').prop('checked',this.checked);
		count();
	}
	else
	{
		$('.tasks').removeClass('completed').addClass('active');
		$('.mark_com').prop('checked',this.checked);
		count();
	}
});


// clicking footer buttons


$('#all_tasks').click(function(event){
	activeTab(event.target);
	showAll();
});

$('#active_tasks').click(function(event){
	activeTab(event.target);
	showActive();
});

$('#comp_tasks').click(function(event){
	activeTab(event.target);
	showCompleted();
});

$('#clear_tasks').click(function(event){
$('.completed').remove();
	$('#mark_all').prop('checked',false);
	count();
});



function showAll(){$('.active,.completed').each(function(){
	$(this).removeClass('hidden');});
	count();
}

function showActive(){
	$('.completed').each(function(){
		$(this).addClass('hidden');
		count();});
	$('.active').each(function(){
		$(this).removeClass('hidden');
		count();
	});
}

function showCompleted(){
	$('.active').each(function(){
		$(this).addClass('hidden');
		count();});
	$('.completed').each(function(){
		$(this).removeClass('hidden');
		count();});
}


// number of tasks left

function count(){
	var c=$('.active').length;
	$('#n_tasks').remove();
	$('#tasksleft').append('<span id="n_tasks">' + c + ((c==1) ? ' task' : ' tasks') + ' left</span>');
	if($('.tasks').length>0)
	{
		$('#footer').removeClass('hidden');
		
	}
	else{
		$('#footer').addClass('hidden');
	}
	showClearCompleted();			//show clear completed tab or not
}

// Show selected tab

function activeTab(item){
	$('#footer button').each(
		function(){
			$(this).removeClass('isActive');
		});
	$(item).addClass('isActive');

}

//show clear completed tab or not

function showClearCompleted(){
	if($('.completed').length>0)
	{
		$('#clear_tasks').removeClass('hidden');
	}
	else if($('.completed').length===0)
	{
		$('#clear_tasks').addClass('hidden');
	}

}
