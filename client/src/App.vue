<template>
    <v-app>
        <v-app-bar app color="#212121" dark>
            <div class="d-flex align-center">
                <v-img alt="Logo" class="mr-2" contain src="./assets/GitHubLogo.png" transition="scale-transition"
                    width="50" />
            </div>
            <v-spacer></v-spacer>
            <v-btn text @click="logout()">
                <span class="mr-2">Logout</span>
            </v-btn>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: 'App',
    data: () => ({
        title: '',
        url: ''
    }),
    methods: {
        logout() {
            console.log('logged out')
            this.$cookies.remove('token');
            this.$router.push('login')
        }
    }
};
</script>
