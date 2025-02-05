<template>
  <headerPage />
  <main>
    <router-view />
  </main>
  <FooterPage />
</template>

<script>
import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';

export default {
  name: 'App',
  components: {
    FooterPage,
    HeaderPage,
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  flex-shrink: 0;
}

main {
  flex-grow: 1;
}

footer {
  flex-shrink: 0;
}
</style>
