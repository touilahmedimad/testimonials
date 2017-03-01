<template>
    <div class="jumbotron">
        <h1>Testemonial Script</h1>
        <p>
            <strong>
                imad  to {{ msg }}
            </strong>
        </p>
    </div>
</template>

<script>

    export default {
        name: 'Dashboard',
        data () {
            return {
                msg: 'Dashboard'
            }
        },
    }
</script>
