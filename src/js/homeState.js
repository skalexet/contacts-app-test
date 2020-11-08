let contacts = [];
            // here is the part that runs Home
export function updateStorage(contact) {
    contacts.push(contact);
}

export function loadContacts() {
    return contacts;
}

export function deleteFromStorage(id) {      
    contacts = contacts.filter(contact => contact.id != id);
}
