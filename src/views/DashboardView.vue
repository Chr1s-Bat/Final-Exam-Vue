<template>
  <div class="page-content">
    <h2>2. System Dashboard & Analytics</h2>
    <p>Overview of system metrics and status parameters.</p>

    <div class="stats-container">
      <div class="stat-box">
        <h3>Total Records</h3>
        <p class="stat-number">4</p>
      </div>
      <div class="stat-box">
        <h3>App Status</h3>
        <p class="stat-number status-active">Active</p>
      </div>
      <div class="stat-box">
        <h3>Vue Version</h3>
        <p class="stat-number">3.x</p>
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
.stats-container {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.stat-box {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  flex: 1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}
.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #35495e;
  margin-top: 0.5rem;
}
.status-active {
  color: #42b883;
}
</style>