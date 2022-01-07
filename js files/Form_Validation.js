function onSubmit() {
    var formData = readformData();
    console.log(formData);

}

function readformData() {
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["profile"] = document.querySelector("input[type=radio][name=profile]:checked").value;
    formData["gender"] = document.querySelector("input[type=radio][name=gender]:checked").value
    formData["dept"] = document.querySelector("input[type=checkbox][name=dept]:checked").value
    formData["note"]= document.getElementById("notes").value;
    return formData;
}