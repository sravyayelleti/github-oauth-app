<template>
    <div>
        <v-row class="ma-4">
            <v-btn class="ma-4" to="/home">Back</v-btn>
        </v-row>
        <v-row justify="center">
            <h3 class="ma-4">{{ title }}</h3>
        </v-row>
        <v-data-table :headers="headers" :items="items"></v-data-table>
    </div>
</template>
<script>
export default {
    name: "Activity",
    data() {
        return {
            title: '',
            url: '',
            headers: [],
            repositoryHeaders: [
                { text: 'Id', value: 'id' },
                { text: 'Repository', value: 'name' },
                { text: 'Owner', value: 'owner.login' },
                { text: 'Description', value: 'description' },
                { text: 'Size', value: 'size' },
                { text: 'Visibility', value: 'visibility' },
                { text: 'Default Branch', value: 'default_branch' }
            ],
            notificationHeaders: [
                { text: 'Id', value: 'id' },
                { text: 'Repository', value: 'repository.name' },
                { text: 'Owner', value: 'repository.owner.login' },
                { text: 'Subject', value: 'subject.title' },
                { text: 'Reason', value: 'reason' },
                { text: 'Updated At', value: 'updated_at' },
                { text: 'Last Read At', value: 'last_read_at' }
            ],
            items: [],
            count: 0
        };
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            this.url = localStorage.getItem('url')
            let token = this.$cookies.get("token");
            fetch(`https://api.github.com/${this.url}`, {
                headers: {
                    Authorization: 'token ' + token
                }
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    this.count = res.length
                    const data = []
                    this.setTitle();
                    this.setHeaders();
                    for (let i = 0; i < this.count; i++) {
                        data.push(Object.assign({}, res[i]))
                    }
                    this.items = this.items.concat(data)
                })
        },
        setTitle() {
            if (this.url == 'user/repos') { this.title = 'Repositories' }
            else if (this.url == 'notifications') { this.title = 'Notifications' }
        },
        setHeaders() {
            if (this.title == 'Repositories') {
                this.headers = this.repositoryHeaders
            } else if (this.title == 'Notifications') {
                this.headers = this.notificationHeaders
            }
        }
    }
}
</script>