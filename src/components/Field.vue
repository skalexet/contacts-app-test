<template>
    <div>
        <div class="field" @change="clearInput"> 
            <div class="name__value">
                <h3> {{field.type}}: </h3>
                <p id="value">{{field.value}}</p>
            </div>

            <div class="edit">
                <input type="text" 
                    v-model="title" 
                    name="title"
                    @input="getInput"
                />
                <button @click="$emit('update-field', field.id)" class="btn">edit</button> 
                <button @click="$emit('undo', field.id)" class="btn">undo</button> 
                <button @click="$emit('cancel', field.id)" class="btn">cancel</button>
                <button @click="$emit('del-field', field.id)" class="del">x</button>
            </div>
        </div>
    </div> 
</template>

<script>
import { inputExtracter } from '../js/input.js';

export default {
    name: "Field",
    props: ["field"],
     

    data() {
        return {
            title: '',
            input: '',
            history: new Map(),  // make possible to undo
            indexHistory: -1,
            rootValue: null,
        }
    },

    methods: {

        getInput() {
            inputExtracter(this.title);
            this.input = this.title;
        },

        clearInput() {
            this.title = '';
        } 

    }
}


</script>

<style scoped>
    .field {
        display: flex;
        justify-content: space-between;
        padding: 13px;
        margin: 13px;
        margin-left: 300px;
        margin-right: 300px;
        color: #313131;
        font-size: 18px;
         
    }
    
    .field p {
        position: relative;
        overflow: hidden;
        float: left;
        margin: 5px;
    }

    .name__value {
        display: flex;
        margin-left: 16%;
    }

    .btn {
        background: #635d5d;
        color: #f2f2f2;
        min-width: 60px;
        min-height: 19px;
        outline: none;
        cursor: pointer;
        display: inline;
    }

    .del {
        background: #615e5e;
        height: 19px;
        color: red;
        min-width: 22px;
        cursor: pointer;
    }
</style>