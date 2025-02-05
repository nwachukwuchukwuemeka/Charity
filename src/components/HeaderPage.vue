<template>
  <header>
    <!--NAVBAR BEGINS HERE -->
    <nav class="navbar">
        <div class="navbar-brand">
            <router-link to="/" style="color: white;">Charity</router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/AboutUsPage" class="navbar-item"> About us</router-link>
                <router-link to="/ContactUsPage" class="navbar-item">Contact us</router-link>
                <router-link to="/ServicesPage" class="navbar-item">Our Services</router-link>

            </div>
            <div class="navbar-end">
                <button class="button is-primary" @click="login">Login</button>
                <button class="button is-primary" @click="register">Register</button>
            </div>
        </div>
    </nav>
    <!-- NAVBAR SECTION ENDS HERE -->
  </header>
</template>
<script>
export default {
    name: "HeaderPage",
};
</script>
<style>
.navbar {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-brand {
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-start{
    margin-right: 2rem;
}

.navbar-item {
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
}

.navbar-item:hover {
    color: #ccc;
}

.navbar-end{
    display: flex;
    align-content: center;
}

.button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.button:hover {
    background-color: #3e8e41;
}
</style>