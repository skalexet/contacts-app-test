<template>
  <div id="info">
    <AddField v-on:add-field="addField" />
    <Fields 
      v-bind:fields="fields" 
      v-on:del-field="deleteField"
      v-on:update-field="updateField"
      v-on:cancel="cancel"
      v-on:undo="undo"
    />
  </div>
</template>

<script>
import Fields from "../components/Fields";
import AddField from '../components/AddField';
import { inputProvider } from "../js/input";
import { assignId } from '../js/infoState';
import { 
  addFieldToContact, editField, 
  fieldBack, backToFirstValue, 
  loadFieldsFromContact, deleteFieldFromContact 
} from '../js/fieldsEditor.js';

export default {
  name: 'Info',

  components: {
    AddField,
    Fields
  },

  data() {
    return {
      fields: [],
    }
  },

  methods: {
    updateField(id) {
      const input = inputProvider();
       
      if ( input == '' || !input ) {
        return;
      }
      editField(id, input);
      this.updateFieldsList();
    },

    updateFieldsList() {
      this.fields = loadFieldsFromContact(); 
    },

    undo(id) {
      fieldBack(id)
    },

    cancel(id) {
      backToFirstValue(id);
    },

    addField(newField) {
      addFieldToContact(newField);
      this.updateFieldsList();
    },

    deleteField(id) {
      if (confirm('Delete this field?')) {
        deleteFieldFromContact(id);
        this.updateFieldsList();
      }
    }

  },

  created() {
    let url = window.location.pathname;  
    let id = url.match(/\d/g);          
    id = id.join("");                   // Info page needs 'id' to load contactData 
    assignId(id);                         
    this.updateFieldsList();
  }
}
</script>

<style scoped>

</style>