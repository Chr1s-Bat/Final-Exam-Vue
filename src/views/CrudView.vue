<template>
  <div class="page-content">
    <h2>3. CRUD Application Management</h2>
    <p>Perform Create, Read, Update, and Delete operations on project inventory/tasks below.</p>

    <!-- Form for Create / Update -->
    <form @submit.prevent="saveItem" class="crud-form">
      <h3>{{ isEditing ? 'Edit Item' : 'Add New Item' }}</h3>
      <div class="form-group">
        <label>Item Name:</label>
        <input type="text" v-model="form.name" required placeholder="Enter name..." />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input type="text" v-model="form.description" required placeholder="Enter description..." />
      </div>
      <button type="submit" class="btn-submit">{{ isEditing ? 'Update Item' : 'Add Item' }}</button>
      <button v-if="isEditing" @click="resetForm" type="button" class="btn-cancel">Cancel</button>
    </form>

    <!-- Data Table / List -->
    <div class="table-container">
      <h3>Item Records</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>
              <button @click="editItem(item)" class="btn-edit">Edit</button>
              <button @click="deleteItem(item.id)" class="btn-delete">Delete</button>
            </td>
          </tr>
          <tr v-if="items.length === 0">
            <td colspan="4" class="no-data">No records found.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Project Proposal', description: 'Initial scoping and requirement gathering' },
        { id: 2, name: 'UI Wireframing', description: 'Figma layout creation for multi-page SPA' },
        { id: 3, name: 'Vue Components', description: 'Developing reusable Single File Components' }
      ],
      form: {
        id: null,
        name: '',
        description: ''
      },
      isEditing: false
    };
  },
  methods: {
    saveItem() {
      if (this.isEditing) {
        // Update
        const index = this.items.findIndex(i => i.id === this.form.id);
        if (index !== -1) {
          this.items[index] = { ...this.form };
        }
      } else {
        // Create
        const newItem = {
          id: Date.now(),
          name: this.form.name,
          description: this.form.description
        };
        this.items.push(newItem);
      }
      this.resetForm();
    },
    editItem(item) {
      this.form = { ...item };
      this.isEditing = true;
    },
    deleteItem(id) {
      this.items = this.items.filter(i => i.id !== id);
    },
    resetForm() {
      this.form = { id: null, name: '', description: '' };
      this.isEditing = false;
    }
  }
};
</script>

<style scoped>
.page-content {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.crud-form {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
}
.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn-submit {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
.btn-cancel {
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 0.5rem;
}
.table-container {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
th, td {
  border: 1px solid #ddd;
  padding: 0.75rem;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
.btn-edit {
  background-color: #ffc107;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 0.4rem;
}
.btn-delete {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  cursor: pointer;
}
.no-data {
  text-align: center;
  color: #777;
}
</style>