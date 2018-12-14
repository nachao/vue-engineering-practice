<template>
    <div>
        <h1>Router View</h1>
        <router-view></router-view>
        <router-link to="first">First</router-link>
        <router-link to="two">Two</router-link>
        <router-link to="three">Three</router-link>
    </div>
</template>

<style lang="scss">
    @value empty: 0;
    @value red: red;

    body {
        padding: empty;
        margin: empty;

        h1 {
            margin: empty;
        }
    }

    .color-red {
        color: red;
    }
</style>
