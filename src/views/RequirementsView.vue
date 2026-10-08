<template>
  <div class="page-content">
    <h2>1. Project Requirements & Class Topics</h2>
    <p>This page summarizes the core discussions and developmental milestones covered in DC 301.</p>
    
    <div class="card-grid">
      <div class="card">
        <h3>Phase 1: Requirement Analysis</h3>
        <p>Gathering functional and non-functional requirements, user stories, and system architecture planning for SPA frameworks.</p>
      </div>
      <div class="card">
        <h3>Phase 2: Vue.js Fundamentals</h3>
        <p>Understanding the Vue instance, reactivity, component composition, directives (`v-if`, `v-for`), and single-file components (`.vue`).</p>
      </div>
      <div class="card">
        <h3>Phase 3: Routing & Navigation</h3>
        <p>Implementing client-side routing using Vue Router to allow seamless transitions between views without full page reloads.</p>
      </div>
      <div class="card">
        <h3>Phase 4: CRUD Implementation</h3>
        <p>Building interactive data management features allowing Users to Create, Read, Update, and Delete records dynamically.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-top: 4px solid #42b883;
}
.card h3 {
  margin-top: 0;
  color: #2c3e50;
}
</style>