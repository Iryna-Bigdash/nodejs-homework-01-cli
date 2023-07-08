const {v4} = require('uuid');
const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, "db", 'contacts.json');

const listContacts = async () => {
    /*If the promise is successfully resolved, the received data is parsed using `JSON.parse(data)` and stored in the variable `contacts`.
    Print the `contacts` array to the console.
    In case of an error, if the promise is rejected, print the error message to the console. */  
     try {
      const data = await fs.readFile(contactsPath);
      const contacts = JSON.parse(data);
      return contacts;
    } catch (error) {
      console.log(error.message);
    }
  };


const getContactById = async(contactId) => {
// Calls listContacts function for get all contacts and by find method finds an object with the matching id in array of all contacts. The result is returned from the function if id is correct and null is returned if id is uncorrect.//
const contacts = await listContacts();
const result = contacts.find(item => item.id === contactId)
if(!result){
    return null
};
return result;
}

 const removeContact = async(contactId) => {
/*Calls listContacts function for get all contacts. Using findIndex() method for get contact with the specified contactId in the array. If the contact is not found (index -1), returns null.
Using splice, removes the contact from the list based on its index and writes the removed contact in the removeContact variable. For updated list of contacts back to the file use fs.writeFile() and JSON.stringify() for converting the array to a JSON.*/
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId);
    if(index === -1){
        return null;
    }
    const [removeContact] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return removeContact;
  }
  
 const addContact = async(name, email, phone) => {
/*Adds a new contact to the list of contacts by pushing newContact to the contacts array. Writes the updated list of contacts back to allc contacts by JSON string using JSON.stringify().Returns the newly added contact.
 */
    const contacts = await listContacts();
    const newContact = {
        "id": v4(),
        "name": name,
        "email": email,
        "phone": phone
    }
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
  }

module.exports = {
    listContacts,
    addContact,
    getContactById,
    removeContact,
  };