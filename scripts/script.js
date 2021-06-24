systemsDropdown.addEventListener('input', () => {
    const systemObject = extractSystemObjects()
    console.log(systemObject)
    deleteRows()
    popTable(systemObject)
    if (dataSheets.hasOwnProperty(systemsDropdown.value)){
        downloadButton.disabled = false;
    }
    else {
        downloadButton.disabled = true;
    }
})

sapTextBox.addEventListener('change', () => {
    resetDefault(systemsDropdown)
    popSystemsDropdown()
    const systemObject = sapObjectSeeker()
    console.log(systemObject)
    deleteRows()
    popTable(systemObject)
    sapTextBox.value="";
    
})

downloadButton.addEventListener('click', () => {
    const url = `resources/${systemsDropdown.value}.zip`
    console.log(url)
    download(url)
})