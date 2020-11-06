<template>
    <div>
        <div class="contact">
            <p class="contact_name"> {{contact.firstname}} </p>
            <div>
                <router-link 
                    v-bind:to="`/info/${contact.id}`" 
                    class="contact_info"    
                >
                  contact info...
                </router-link>
            </div>
            <button @click="$emit('del-contact', contact.id)" class="del">x</button>
        </div>
    </div> 
</template>

<script>
import { storeContact } from '../js/infoState.js';

export default {
    name: "Contact",
    props: ["contact"],

    data() {
        return{
            history: new Map(),
            indexHistory: -1,
        }
    },

    methods: {
    },

    created() {
        storeContact(this.contact);
    }
}
</script>

<style scoped>
    .contact {
        background-color: #ddd6cc(158, 152, 126);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .contact_name {
        padding: 8px;
        margin: 8px;
        color: #313131;
        font-size: 20px;
    }

    .contact_info {
        color:rgb(218, 67, 97);
        text-decoration: none;
        display: flex;
        position: absolute;
        min-width: 110px;
        left: 47%;
        right: 53%;
    }

    .del {
        border: none;
        color: red;
        min-width: 25px;
        border-radius: 50%;
        margin: 0;
        padding: 4px;
        cursor: pointer;
        outline: none;
    }
</style>