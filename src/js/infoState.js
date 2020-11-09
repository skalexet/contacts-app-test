const contactsStorage = []; 

let currentId; // track current contact in Info statement

export function storeContact(currentContact) {
    if (contactsStorage.includes(currentContact)) {
        return;
    }

    const contactData = {
        contact: currentContact,
        fields: [],
    }
    
    contactsStorage.push(contactData);
}

export function assignId(id) {
    currentId = id; // assignes immediately after Info page loaded
}

export function getData() {
    for (let contactData of contactsStorage) {
        if (contactData.contact.id == currentId) {
            return contactData;
        }
    }
}
