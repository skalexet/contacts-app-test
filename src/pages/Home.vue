<template>
  <div id="home">
    <AddContact v-on:add-contact="addContact"/>
    <Contacts class="contacts" 
      v-bind:contacts="contacts" 
      v-on:del-contact="deleteContact" 
    />
  </div>
</template>

<script>
import Contacts from "../components/Contacts";
import AddContact from '../components/AddContact';
import {updateStorage, loadContacts, deleteFromStorage} from '../js/homeState.js';

export default {
  name: 'Home',

  components: {
      AddContact,
      Contacts
  },

  data() {
    return {
      contacts: this.update()
    }
  },

  methods: {
      deleteContact(id) {
        if (confirm( 'Delete this contact?')) {
          deleteFromStorage(id);
          this.contacts = loadContacts();
        }
      },

      addContact(newContact) {
        updateStorage(newContact);
      },

      update() {
        return loadContacts();
      }

  }
}
</script>

<style scoped>
  .contacts {
    margin-left: 270px;
    margin-right: 270px;
  } 
</style>