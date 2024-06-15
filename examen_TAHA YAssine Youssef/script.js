function toggleform(){
    state = 1;
    var formbtn= document.getElementById('formbtn');
    
    if (state == 1){
        state = 0 ; 
        formbtn.innerHTML = 'Close';
        openform();
    } else {
        state = 1 ; 
        formbtn.innerHTML = 'Open';
        closeform();
    }
}

function openform(){
    var formcontainer = document.getElementById('formcontainer');
    formcontainer.setAttribute('id','formcontainer');

    var nameLabel = document.createElement('label');
    nameLabel.textContent = "Name : ";

    var nameInput = document.createElement('input');
    nameInput.setAttribute('id','nameInput');
    nameInput.setAttribute('type','text');

    var genderLabel = document.createElement('label');
    genderLabel.textContent = "Gender : ";

    var radiovalues = ['Male' , 'Female'];
    var radiocontainer = document.createElement('div');
    radiocontainer.setAttribute('id','radiocontainer');
    for(var i = 0 ; i < radiovalues.length ; i++){
        radiobutton.setAttribute('id','radio' +(i + 1));
        radiobutton.setAttribute('type','radio');
        radiobutton.setAttribute('name','radio');
        radiobutton.setAttribute('value',radiovalues[i]);
        
        var label = document.createElement('label');
        label.textContent = radiovalues[i];
        label.setAttribute('for' , 'radio' + (i+1));

        radiocontainer.appendChild(label);
        radiocontainer.appendChild(radiobutton);

    }

    
    var positionLabel = document.createElement('label');
    positionLabel.textContent = "Position : ";

    var positionInput = document.createElement('input');
    positionInput.setAttribute('id','positionInput');
    positionInput.setAttribute('type','text');

    form.style.border= 1px black ;
    

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(positionLabel);
    form.appendChild(positionInput);

    document.body.appendChild(form);
}

function closeform(){
    var myForm = document.getElementById('form');
    if(myForm){
        document.body.removeChild(form);
    }
}

function submitformAndCreateTable(){
    var nameInput = document.getElementById('nameInput').value ;
    var positionInput = document.getElementById('positionInput').value ;

    if(nameInput.trim()==="" || positionInput.trim()==="") {
        alert("you should fill the blanks !!");
    }

    var tableData = document.getElementById('tableData');
    var trdata = document.createElement('tr');
    var tdName = document.createElement('td');
    var tdPosition = document.createElement('td');

    tdName.textContent = nameInput ;
    tdPosition.textContent = positionInput ;

    trdata.appendChild(tdName);
    trdata.appendChild(tdPosition);

    tableData.appendChild(trdata);

    displayselectedvalue();
}

function displayselectedvalue(){
    var radiobuttons= document.getElementsByName('radio');
    selectedValue ="";

    
    for(var i=0 ; i < radiobuttons.length ; i++){
        if(radiobuttons[i].checked){
            selectedValue = radiobuttons[i].value ;
            break ;
        }
        else{
            document.getElementById('selectedValue').textContent = "selectedValue" + selectedValue ;
            document.getElementById('selectedValue').textContent = "please select an option !!" ;
        }
    }
}