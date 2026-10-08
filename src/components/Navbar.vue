<template>
  <nav class="navbar">
    <div class="logo">DC 301 - Final Exam SPA</div>
    <ul class="nav-links">
      <li><router-link to="/">Landing Page</router-link></li>
      <li><router-link to="/requirements">Requirements</router-link></li>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/crud">CRUD App</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
}
.logo {
  font-weight: bold;
  font-size: 1.2rem;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.nav-links a.router-link-active {
  color: #42b883;
  border-bottom: 2px solid #42b883;
  padding-bottom: 2px;
}
</style>