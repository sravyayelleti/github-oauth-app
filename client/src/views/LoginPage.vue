<template>
    <v-container fill-height>
        <v-row justify="center">
            <div>
                <div class="d-block">
                    <v-img alt="Logo" class="mr-2" contain src="../assets/GitHubLogo.png" transition="scale-transition"
                        width="200" />
                </div>
                <div class="d-block">
                    <h3 class="pa-5">GitHub OAuth App</h3>
                </div>
                <div class="d-block">
                    <v-btn class="d-block"><a class="login-link" :href="link">Login with GitHub</a></v-btn>
                </div>
            </div>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            clientId: 'd8082469b46af82a1b64',
            scope: 'user repo notifications',
            url: 'https://github.com/login/oauth/authorize',
            link: ''
        };
    },
    created: function () {
        this.link = this.url + "?client_id=" + this.clientId + "&scope=" + this.scope;
    }
}
</script>