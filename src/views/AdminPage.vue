<template>
    <v-container>
      <!-- Button to add a new category -->
      <v-btn color="primary" @click="showAddForm">Ajouter une catégorie</v-btn>
  
      <!-- Form for adding or editing a category -->
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on" v-if="!editMode">Ajouter une catégorie</v-btn>
          <v-btn color="primary" dark v-on="on" v-else>Éditer la catégorie</v-btn>
        </template>
        <v-card>
          <v-card-title v-if="!editMode">Ajouter une catégorie</v-card-title>
          <v-card-title v-else>Éditer la catégorie</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field v-model="form.categoryName" label="Nom de la catégorie"></v-text-field>
              <v-btn type="submit" color="primary">Enregistrer</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
  
      <!-- List of categories with edit and delete buttons -->
      <v-list>
        <v-list-item v-for="(category, index) in categories" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ category.name }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="editCategory(category)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deleteCategory(category)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          { id: 1, name: 'Category 1' },
          { id: 2, name: 'Category 2' },
          { id: 3, name: 'Category 3' }
        ],
        dialog: false,
        form: {
          categoryName: '',
          categoryId: null
        },
        editMode: false
      };
    },
    methods: {
      showAddForm() {
        this.editMode = false;
        this.form.categoryName = '';
        this.dialog = true;
      },
      editCategory(category) {
        this.editMode = true;
        this.form.categoryName = category.name;
        this.form.categoryId = category.id;
        this.dialog = true;
      },
      submitForm() {
        if (this.editMode) {
          const index = this.categories.findIndex(cat => cat.id === this.form.categoryId);
          if (index !== -1) {
            this.categories[index].name = this.form.categoryName;
          }
        } else {
          const newId = this.categories.length + 1;
          this.categories.push({ id: newId, name: this.form.categoryName });
        }
        this.dialog = false;
      },
      deleteCategory(category) {
        const index = this.categories.findIndex(cat => cat.id === category.id);
        if (index !== -1) {
          this.categories.splice(index, 1);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* TODO: Styles for this vue */
  </style>