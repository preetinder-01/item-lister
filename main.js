var form = document.getElementById('entry-form',);
var item = document.getElementById('items');
var search = document.getElementById('search');
//Form submit event
form.addEventListener('submit',addItem);
//delete event
item.addEventListener('click',removeItem);

//search item
search.addEventListener('keyup',searchItems);
//addItem



function addItem(e){
    e.preventDefault();

    //get input
    var newItem = document.getElementById('input').value;

    //create new li
    var li = document.createElement('li');
    //add class
    li.className = 'list-item';
    li.id = 'item';

    //add text node with input
    li.appendChild(document.createTextNode(newItem));

    // crreate delete btn element
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append btn to li
    li.appendChild(deleteBtn);

    //append li to list
    item.appendChild(li);

    storeTaskInLocalStorage(newItem.value);

}


//remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            item.removeChild(li);
        }
    }
}

//Filter items
function searchItems(e)
{
    //convert to lower case
    var text= e.target.value.toLowerCase();

    //get list
    var items =item.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent; 
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    })
}