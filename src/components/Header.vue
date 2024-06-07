<template>
    <ul class="nav nav-pills">
        <!--li role="presentation"><router-link to="/">Home</router-link></li>
        <li role="presentation"><router-link to="/User">User</router-link></li-->

        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/User/10" tag="li" active-class="active" exact><a>User</a></router-link>
    </ul>
</template>