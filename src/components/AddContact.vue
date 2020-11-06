<template>
    <div class="add">
        <h2 class="header">Contacts</h2>
        <form @submit="addContact">
            <input type="text" v-model="title" name="title" placeholder="Name">
            <input type="submit" value="Add new contact" class="button">
        </form>
    </div>
</template>

<script>
export default {
    name: "AddContact",
    data() {
        return {
            title: ''
        }
    },

    methods: {
        addContact(e) {
            e.preventDefault();

            if (this.title == '') {
                return;
            }

            const random = Math.floor(Math.random() * 1e10); // id generating 
            const newContact = {
                id: random.toString(),
                firstname: this.title,
                link: "info/" + random
            }

            this.$emit('add-contact', newContact);

            this.title = '';
        }
    }
}
</script>

<style scoped> 
.add {
    text-align: center;
    align-items: center;
    background: #212121;
    margin: 0;
    padding: 18px;
}

.header {
    margin:  10px;
    color: white;
    left: 50%;
    right: 50%;
}
</style>