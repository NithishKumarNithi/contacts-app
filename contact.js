var form = document.getElementById('contact_form');
var name_val = document.getElementById('name');
var mobile_val = document.getElementById('mobile');
var contact_list = document.getElementById('contact_list');
var ul = document.querySelector('ul');

form.addEventListener('submit',Savecontacts);
contact_list.addEventListener('click',removeoreditlist);

function Savecontacts(e){
  e.preventDefault();
  var name = name_val.value;
  var mobile_no = mobile_val.value;
  //create list
  if( name == ''|| mobile_no == ''){
      alert('Please enter the data');
  }else{
     contact_list.style.display = "block";
     var li = document.createElement('li');
     //create span 
     var span = document.createElement('span');
     //include span classname
     span.className = 'list_contact';
     //append contact name
     span.appendChild(document.createTextNode(name));
     //append to li
     li.appendChild(span);
     //create span with other classname
     var span2 = document.createElement('span');
     span2.className = 'list_number';
     span2.appendChild(document.createTextNode(mobile_no));
     //append to li
     li.appendChild(span2);
     //create button1
     var btn1 = document.createElement('button');
      btn1.className = 'list_edit';
      btn1.appendChild(document.createTextNode('Edit'));
      li.appendChild(btn1);
      //create button2
     var btn2 = document.createElement('button');
      btn2.className = 'list_delete';
      btn2.appendChild(document.createTextNode('Delete'));
      li.appendChild(btn2);
      //create ul
      //var ul = document.createElement('ul');
     ul.appendChild(li);
     //append ul to contact list
     contact_list.appendChild(ul);
     // console.log(ul);
     //reset form
     form.reset();
   }
}
 //remove or edit contact list
 function removeoreditlist(e){
     e.preventDefault();
     //to delete the contact
     if(e.target.classList.contains('list_delete')){
        var li = e.target.parentElement;
        ul.removeChild(li);
     }
     //to edit the content
     if(e.target.classList.contains('list_edit')){
        //var targetcontactval = e.tar
        var li = e.target.parentElement;
        //getting name and number of contact to edit
        var name = li.children[0].textContent;
        var mobile_num = li.children[1].textContent;
        //assign to the form
        name_val.value = name;
        mobile_val.value = mobile_num;
        ul.removeChild(li);
        //console.log(ul.children[1]);

     }
     
    
 }