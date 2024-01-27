function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
} 

function displayCsv(filename, id, headerVals) {
    const parent = document.getElementById(id)
    while (parent.firstChild) {
        parent.firstChild.remove()
    }

    onload = fetch(filename).then(res => {
        return res.text()
    }).then(data => {
    let result = data.split(/\r?\n|\r/).map(e => {
        return e.split(",")
    })

    
    let header = document.createElement("tr");
    header.innerHTML = headerVals
    document.getElementById(id).appendChild(header)

    result.forEach(e => {
        let m = e.map(e => {
            return `<td>${e}</td>`;
        }).join("")
        let ce = document.createElement("tr");
        ce.innerHTML = m;
        if (ce.innerText != "") {
            document.getElementById(id).appendChild(ce);
        }
    })
})
}