
var item_arr = [];
var input = document.getElementById('input');

btn = document.getElementById('add_item');
//btn clicked
btn.addEventListener("click", function(){
	
	var item = input.value;
	var list = document.getElementById('list');
	var list_item = document.createElement('li');
	txtbox = document.createElement('div');
	txtbox.setAttribute("id", "txtbox");

	//makes text editable

	txtbox.addEventListener("dblclick", function(){
		txtbox.contentEditable = true;
	})
	//handles empty input
	if(item == ""){
		alert("Must type something in");
		return null;
	}
	//makes list_item and appends stuff 
	list_item.text = document.createTextNode(item);
	list.appendChild(list_item);
	list_item.appendChild(txtbox);
	txtbox.appendChild(list_item.text);
	//arr to keep track of indexes for delete btn
	item_arr.push(list_item);
	var item_index = item_arr.indexOf(list_item);
	//delete btn
	var delete_btn = document.createElement('p');
	delete_btn.innerHTML = 'X';
	list_item.appendChild(delete_btn);

	//delete btn function
	delete_btn.addEventListener("click", function(){
		let i = item_index - 1; //starts at 1 for some reason??
		let fadeOut = item_arr[i];
		let fadeEffect = setInterval(function(){
			if(!fadeOut.style.opacity < 0.1){
				clearInterval(fadeEffect);

			}else{
				fadeOut.style.opacity -= 0.1;
				clearInterval(fadeEffect);
				fadeOut.remove();
			}
		}, 200)
		
		
	})

	item_index += 1;
	
	input.value = "";
	
	input.focus();
	//styles 

	// turns rgba(7, 160, 84, 0.87) when you click an item - marks as done
	list_item.addEventListener("click", function(){
		
		if (list_item.style.backgroundColor === "rgba(7, 160, 84, 0.87)"){
			let kids = list_item.children;
			let div = kids[0];
			let p = kids[1];
			let edit = kids[2]
			div.style.backgroundColor = "rgb(183, 115, 40)";
			p.style.backgroundColor = "rgb(183, 115, 40)";
			list_item.style.backgroundColor = "rgb(183, 115, 40)";
			div.style.transition = ".5s ease";
			p.style.transition = ".5s ease";
			list_item.style.transition = ".5s ease";



		}else{
			let kids = list_item.children;
			let div = kids[0];
			let p = kids[1];
			div.style.backgroundColor = "rgba(7, 160, 84, 0.87)";
			p.style.backgroundColor = "rgba(7, 160, 84, 0.87)";
			list_item.style.backgroundColor = "rgba(7, 160, 84, 0.87)";
			list_item.style.transition = ".5s ease";
			p.style.boxShadow = "none";
			div.style.boxShadow = "none";
		}
	})
	


})






