<template>
    <div>
        <v-row class="ma-8" justify="center">
            <h3>Profile</h3>
        </v-row>
        <v-row class="ma-10">
            <v-col cols="6">
                <v-row v-for="(item, i) in items" :key="i">
                    <v-card class="profile-card" outlined tile>{{ item.text }}</v-card>
                </v-row>
            </v-col>
            <v-col cols="6">
                <v-row v-for="(item, i) in items" :key="i">
                    <v-card class="profile-card" outlined tile> {{ user[item.value] }}</v-card>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="mx-8" align="center">
                <v-btn @click="redirectPage('user/repos')">Repositories</v-btn>
            </v-col>
            <v-col class="mx-8" align="center">
                <v-btn @click="redirectPage('notifications')">Notifications</v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>

export default {
    name: "Home",
    data() {
        return {
            user: {},
            token: '',
            items: [
                { text: 'Id', value: 'id' },
                { text: 'Name', value: 'name' },
                { text: 'Login', value: 'login' },
                { text: 'E-mail', value: 'email' },
                { text: 'URL', value: 'url' },
                { text: 'Company', value: 'company' },
                { text: 'Collaborators', value: 'collaborators' }
            ],
        };
    },
    created() {
        this.getUser();
    },
    methods: {
        getUser() {
            let token = this.$cookies.get("token");
            fetch('https://api.github.com/user', {
                headers: {
                    Authorization: 'token ' + token
                }
            })
                .then(res => res.json())
                .then(res => {
                    this.user = res;
                    console.log(res)
                })
        },
        redirectPage(url) {
            this.$router.push('list');
            localStorage.setItem('url', url)
        }
    }
}
</script>

