var selectedRow = null

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["sms"] = document.getElementById("sms").value;
    formData["itemid"] = document.getElementById("itemid").value;
    formData["mat"] = document.getElementById("mat").value;
    formData["pkg"] = document.getElementById("pkg").value;
    formData["mark"] = document.getElementById("mark").value;
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("swrlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.sms;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.itemid;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mat;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pkg;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.mark;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("sms").value = "";
    document.getElementById("itemid").value = "";
    document.getElementById("mat").value = "";
    document.getElementById("pkg").value = "";
    document.getElementById("mark").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("sms").value = selectedRow.cells[0].innerHTML;
    document.getElementById("itemid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mat").value = selectedRow.cells[2].innerHTML;
    document.getElementById("pkg").value = selectedRow.cells[3].innerHTML;
    document.getElementById("mark").value = selectedRow.cells[4].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.sms;
    selectedRow.cells[1].innerHTML = formData.itemid;
    selectedRow.cells[2].innerHTML = formData.mat;
    selectedRow.cells[3].innerHTML = formData.pkg;
    selectedRow.cells[4].innerHTML = formData.mark;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("swrlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // sms validation
    if (document.getElementById("sms").value == "") {
        isValid = false;
        document.getElementById("smsvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("smsvalidationError").classList.contains("hide"))
        {
            document.getElementById("smsvalidationError").classList.add("hide");
        }
    }
    // item_id validation
    if (document.getElementById("itemid").value == "") {
        isValid = false;
        document.getElementById("itemidvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemidvalidationError").classList.contains("hide"))
        {
            document.getElementById("itemidvalidationError").classList.add("hide");
        }
    }
    // material validation
    if (document.getElementById("mat").value == "") {
        isValid = false;
        document.getElementById("matvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("matvalidationError").classList.contains("hide"))
        {
            document.getElementById("matvalidationError").classList.add("hide");
        }
    }
    // pink_pkg validation
    if (document.getElementById("pkg").value == "") {
        isValid = false;
        document.getElementById("pkgvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("pkgvalidationError").classList.contains("hide"))
        {
            document.getElementById("pkgvalidationError").classList.add("hide");
        }
    }
    // remark validation
    if (document.getElementById("mark").value == "") {
        isValid = false;
        document.getElementById("markvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("markvalidationError").classList.contains("hide"))
        {
            document.getElementById("markvalidationError").classList.add("hide");
        }
    }
    return isValid;
}