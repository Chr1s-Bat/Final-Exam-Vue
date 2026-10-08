<template>
  <div class="home-container">
    <div class="hero">
      <h1>Welcome to the Vue.js Final Exam Project</h1>
      <p>Batch 2 (TTh 10:30 AM - 12:00 NN)</p>
      <p class="subtitle">This Single Page Application (SPA) showcases requirement analysis, multi-page routing, and full CRUD operations built with Vue.js.</p>
      <router-link to="/requirements" class="btn">Get Started</router-link>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
  padding: 5rem 2rem;
  background: #f9f9f9;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hero h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
.subtitle {
  max-width: 600px;
  color: #666;
  margin: 1.5rem 0;
  line-height: 1.6;
}
.btn {
  display: inline-block;
  background-color: #42b883;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
}
.btn:hover {
  background-color: #35495e;
}
</style>