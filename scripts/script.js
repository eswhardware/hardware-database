systemsDropdown.addEventListener('input', () => {
    const systemObject = extractSystemObjects()
    console.log(systemObject)
    deleteRows()
    popTable(systemObject)
    
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