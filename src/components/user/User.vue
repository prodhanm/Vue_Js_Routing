<template>
    <div>
User Component: {{ id }}
    <hr>
    <button @click="navigateToHome" class="btn btn-primary">Go Home</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id:this.$route.params.id
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>