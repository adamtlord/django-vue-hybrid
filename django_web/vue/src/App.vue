<template>
  <div id="app" class="font-sans text-center text-gray-700 mx-8">
    <nav class="py-8 font-bold">
      <router-link active-class="text-green-500" to="/">Home</router-link> |
      <router-link active-class="text-green-500" to="/about">About</router-link> |
      <a href="/example/">Django Page</a>
    </nav>
    <router-view />
  </div>
</template>
