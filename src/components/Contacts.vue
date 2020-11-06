<template>
    <div>
        <div v-bind:key="contact.id" v-for="contact in contacts">
            <Contact v-bind:contact="contact" v-on:del-contact="$emit('del-contact', contact.id)" />
        </div>
    </div>
</template>

<script>
import Contact from './Contact.vue';

export default {
    name: "Contacts",
    components: {
        Contact
    },
    props: ["contacts"]
}
</script>

<style scoped>

</style>