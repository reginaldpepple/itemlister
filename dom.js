var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

// FilterEvent
filter.addEventListener('keyup',filterItems);

// Add Item Function 
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;
    
    // Create new li element
    var li = document.createElement('li');
    // Add Class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element 
    var deleteBtn = document.createElement('button');

    // Style the button
    deleteBtn.style.color = 'white';

    // Added a class name
    deleteBtn.className = 'delete';

    // Create Text inside of button
    deleteBtn.appendChild(document.createTextNode('X'));

    //  Add the button element in the li tag.
    li.appendChild(deleteBtn);

    // Append Li to list
    itemList.appendChild(li);
}

// Remove Item
function removeItem(e){
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get all li's in the ul
    var items = itemList.getElementsByTagName('li');

    // Convert HTML Collection to an array. 
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })



}