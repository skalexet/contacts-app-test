<template>
    <div>
        <div v-bind:key="field.id" v-for="field in fields">
            <Field 
                v-bind:field="field" 
                v-on:del-field="$emit('del-field', field.id)"
                v-on:update-field="$emit('update-field', field.id)"
                v-on:cancel="$emit('cancel', field.id)"
                v-on:undo="$emit('undo', field.id)"
            />
             
        </div>
    </div>
</template>

<script>
import Field from './Field.vue';

export default {
    name: "Fields",
    components: {
        Field
    },
    props: ["fields"],

}
</script>

<style scoped>

</style>