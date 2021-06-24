const tableBody = document.querySelector('tbody'), 
      systemsDropdown = document.getElementById('systems-dropdown'),
      originalTable = tableBody.innerHTML,
      sapTextBox = document.querySelector('#sap-dropdown'),
      downloadButton = document.querySelector('button');

function popSystemsDropdown() {
    let systemNames = new Set;
    
    for (let object of data){
        systemNames.add(object.system)
    }
    for (let element of systemNames){
        let option = document.createElement('option');
        option.textContent = `${element}`;
        option.value = element;
        systemsDropdown.appendChild(option);
    }
}

function extractSystemObjects(){
    const selectedSystem = systemsDropdown.value;
    console.log(selectedSystem)
    let systemObject = [];
    
    for (let element of data){
        if (element.system === selectedSystem){
            systemObject.push(element)
        }
    }
    return systemObject;
}

function sapObjectSeeker(){
    const sapCode = sapTextBox.value;
    console.log(sapCode)
    let systemObject = [];

    for (let element of data){
        if (element.sapCode === sapCode){
            systemObject.push(element)
        }
    }
    return systemObject;
}
        
function popTable(systemObject){
    const sObject = systemObject;

    sObject.forEach(object => {
        let row = document.createElement('tr');
        row.id = object.glassThickness;
        tableBody.appendChild(row);
        if(object.tested === 'TESTED'){
            row.className = 'tested'
        }

        for (let column of Object.keys(object)){
            let tableData = document.createElement('td');
            tableData.textContent = object[column];
            row.appendChild(tableData)
        }        
    })
}

function deleteRows(){    
    tableBody.innerHTML = originalTable;
}

function resetDefault(htmlElement){
    while (htmlElement.length > 0){
        htmlElement.remove(0)
    }
}

function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    a.download = url/*.split('/').pop()*/
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }