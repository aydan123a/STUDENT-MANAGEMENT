let students=[];
let editIndex=-1;
function addStudent(){
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;

    if(name=="" || age=="") return;

    if(editIndex==-1){
        students.push({name:name,age:age});
    }else{
        students[editIndex].name=name;
        students[editIndex].age=age;
        editIndex=-1;
    }

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    render();
}
function render(data=students){
    let table=document.getElementById("table");

    table.innerHTML=`
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Actions</th>
    </tr>`;

    data.forEach((student,index)=>{
        table.innerHTML+=`
        <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>
                <button class="edit" onclick="editStudent(${index})">Edit</button>
                <button class="delete" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`;
    });
}
function editStudent(index){
    document.getElementById("name").value=students[index].name;
    document.getElementById("age").value=students[index].age;
    editIndex=index;
}

function deleteStudent(index){
    students.splice(index,1);
    render();
}
function searchStudent(){
    let value=document.getElementById("search").value.toLowerCase();

    let filtered=students.filter(student=>
        student.name.toLowerCase().includes(value)
    );

    render(filtered);
}
