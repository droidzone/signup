<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <header class="bg-primary text-white py-3">
      <div class="container">
        <h1 class="mb-0">Sign up for a Trial Access to the software</h1>
      </div>
    </header>
    <nav class="bg-light py-2">
      <div class="container">
        <ul class="nav">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
        </ul>
      </div>
    </nav>
    <main class="container py-4">
      <RouterView />
    </main>
    <footer class="bg-dark text-white py-3 mt-4">
      <div class="container text-center">
        <p class="mb-0">&copy; 2018-28 Geekmaze Software Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
