import  { getData } from './infoState';
        //this part treats the Info page
export function addFieldToContact(field) {
    if ( field.value == '' || field.type == '' ) {
        return;
    }
    const contactData = getData(); 
    contactData.fields.push(field);

    assignRootValue(field);
    updateFieldHistory(field);
}

//field editing block
export function editField(id, input) {  
    const contactData = getData();

    for (let field of contactData.fields) {
        if (field.id == id) {
            field.value = input;
        }

        updateFieldHistory(field);
    }
}

export function fieldBack(id) {        // undo implementation
    const contactData = getData();
    for (let field of contactData.fields) {
        if (field.id == id) {
            if (field.historyIndex - 1 < 0) {
                return;
            }
            
            field.value = field.history.get(--field.historyIndex);
        }
    }
}

export function backToFirstValue(id) { // cancel implementation
    const contactData = getData();
    for (let field of contactData.fields) {
        if (field.id == id) {
            if (field.value == field.rootValue) {
                return;
            }

            if (confirm('Cancel all of changes?')) {
                field.value = field.rootValue;
            }
        }
    }
}

export function loadFieldsFromContact() {
    const contactData = getData();
    return contactData.fields;
}

export function deleteFieldFromContact(id) {    
    const contactData = getData();
    contactData.fields = contactData.fields.filter(field => field.id != id);
}

function updateFieldHistory(field) {
    field.history.set(++field.historyIndex, field.value);
}

function assignRootValue(field) {
    if (field.rootValue == null) {
        field.rootValue = field.value;
    }
}