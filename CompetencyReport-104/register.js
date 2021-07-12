var salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        number:"206-k"
    },
    hour:{
        open:"9.00 am",
        close:"10.00 pm"
    },
    pets:[]
}
var c=0;
class Pet{
    constructor(name,type,age,gender,breed,service,ownerName,contactPhone){
        this.name=name;
        this.type=type;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id=c++;
    }
}


function displayPet(){
    var tmp="";
    document.getElementById("info").innerHTML=`<p>Amount of Pets: ${salon.pets.length}</p>`;
    
    myTable();
}

function myTable(){
    var tmp="";

    for(i=0;i<salon.pets.length;i++){
        
        tmp+=`
        <tr id="${salon.pets[i].id}">
            <td>${salon.pets[i].name}</td>
            <td>${salon.pets[i].type}</td>
            <td>${salon.pets[i].age}</td>
            <td>${salon.pets[i].gender}</td>
            <td>${salon.pets[i].breed}</td>
            <td>${salon.pets[i].service}</td>
            <td>${salon.pets[i].ownerName}</td>
            <td>${salon.pets[i].contactPhone}</td>
            <td><button onclick="deletePet(${salon.pets[i].id});">🗑️</button></td>
        </tr>
        `;
        
    }
    document.getElementById("petTable").innerHTML=tmp;
}


function deletePet(id){
    var div=document.getElementById(id);
    for(var i=0;i<salon.pets.length;i++){
        var aPet=salon.pets[i];
        if(aPet.id==id){
            deleteIndex=i;
        }
    }
    salon.pets.splice(deleteIndex,1);
    div.remove();
    displayPet();
}
function validation(i1,i2,i3,i4,i5,i6,i7,i8){
    if(i1!=""&&i2!=""&&i3!=""&&i4!=""&&i5!=""&&i6!=""&&i7!=""&&i8!=""){
        var flag=true;
    }
    return flag;
}
function registerPet(){
    //get and store the values
   var inputName=document.getElementById("petName").value;
   var inputType=document.getElementById("petType").value;
   var inputAge=document.getElementById("petAge").value;
   var inputGender=document.getElementById("petGender").value;
    var inputBreed=document.getElementById("petBreed").value;
    var inputService=document.getElementById("petService").value;
    var inputOwnerName=document.getElementById("ownerName").value;
    var inputOwnerPhone=document.getElementById("ownerPhone").value;
   //console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputOwnerName,inputOwnerPhone)
    //create the generic pet
    if(validation(inputName,inputType,inputAge,inputGender,inputBreed,inputService,inputOwnerName,inputOwnerPhone)){
        var thePet=new Pet(inputName,inputType,Number(inputAge),inputGender,inputBreed,inputService,inputOwnerName,inputOwnerPhone);
        //push the object into the array
        salon.pets.push(thePet);
        //clear the inputs
        clearInputs();
        displayPet();
    var success=document.getElementById('success');
    success.classList.remove("hide2");
    setTimeout(function(){
        success.classList.add("hide2");
    },4000/*4 seconds*/)
    }else{
        var fail=document.getElementById('fail');
        fail.classList.remove("hide2");
        setTimeout(function(){
            fail.classList.add("hide2");
        },4000/*4 seconds*/)

    }
}
function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petType").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("ownerName").value="";
    document.getElementById("ownerPhone").value="";
}
function searchPet(){
    var searchString=document.getElementById('searchPet').value;
    //travel the array to search the string
    salon.pets.forEach(pet => {
        var petBox=document.getElementById(pet.id);
        console.log(petBox)
           //compare the search string with all names
        if(pet.name.toLowerCase().includes(searchString.toLowerCase()) ||
            pet.service.toLowerCase().includes(searchString.toLowerCase())){
             //highlight the element in the DOM
            petBox.classList.add('show');
        }else{
            console.log('Not here!');
            petBox.classList.remove('show');
            petBox.classList.add('hide2');
        }
    });
}

function init(){
    console.log("init");
    var scooby=new Pet("scooby","dog",50,"male","dane","shower","shaggy","555-555-555");
    var scrappy=new Pet("scrappy","dog",40,"male","dane","nails cut","shaggy","666-666-666");
    var tweety=new Pet("tweety","bird",20,"male","parokeet","nails trimmed","sylvester","777-777-777");
    var jerry=new Pet("jerry","mouse",45,"male","brown mouse","bath","tom","888-888-888");
    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    salon.pets.push(tweety);
    salon.pets.push(jerry);
    displayPet();
    //hook events
    document.querySelector('#btn-register').addEventListener("click",registerPet);
    document.querySelector('#searchPet').addEventListener("keyup",searchPet);
}
window.onload=init;