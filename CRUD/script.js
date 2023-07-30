var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();

}

// Retrieve the data
function readFormData(){
    var formData = {};
    formData["studentCode"] = document.getElementById("studentCode").value;
    formData["student"] = document.getElementById("student").value;
    formData["department"] = document.getElementById("department").value;
    formData["email"] = document.getElementById("email").value;
    formData["mobile_no"] = document.getElementById("mobile_no").value;
    return formData;
}

// Insert the Data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.studentCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.student;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.department;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.email;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.mobile_no;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = "<button onClick = 'onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>";

}

// Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('studentCode').value = selectedRow.Cells[0].innerHTML;
    document.getElementById('student').value = selectedRow.Cells[1].innerHTML;
    document.getElementById('department').value = selectedRow.Cells[2].innerHTML;
    document.getElementById('email').value = selectedRow.Cells[3].innerHTML;
    document.getElementById('mobile_no').value = selectedRow.Cells[4].innerHTML;
}

function updateRecord(formData){
    selectedRow.Cells[0].innerHTML = formData.studentCode;
    selectedRow.Cells[1].innerHTML = formData.student;
    selectedRow.Cells[2].innerHTML = formData.department;
    selectedRow.Cells[3].innerHTML = formData.email;
    selectedRow.Cells[4].innerHTML = formData.mobile_no;
    
}

// Delete the data
function onDelete(td){
    if(confirm('Do you want to dele this record?S')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

// Reset the data
function resetForm(){
    document.getElementById('studentCode').value = '';
    document.getElementById('student').value = '';
    document.getElementById('department').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile_no').value = '';
}