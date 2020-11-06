<template>
    <div class="add">
        <h2 class="header">
            <router-link to="/" style="text-decoration: none; color: white">
                ..back to contacts
            </router-link>
        </h2>

        <form @submit="addField">
            <input type="text" v-model="title" name="title" placeholder="name of field">
            <input type="text" v-model="value" name="value" placeholder="value">
            <input type="submit" value="Add new field" class="button"> 
        </form>
    </div>
</template>

<script> 
export default {
    name: "AddField",

    data() {
        return {
            title: '',
            value: ''
        }
    },

    methods: {
        addField(e) {
            e.preventDefault();

            const newField = {
                id: Math.random(),
                type: this.title,
                value: this.value,
                history: new Map(),
                historyIndex: -1
            }

            this.$emit('add-field', newField);

            this.title = '';
            this.value = '';
        }
    }
}

</script>

<style scoped>
.button {
    color:#212121;
}

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
}
</style>