<template>
  <div id="app" class="font-sans text-center text-gray-700 mx-8">
    <nav class="py-8 font-bold">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
