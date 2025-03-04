<template>
    <div class="container">
      <h1>Contactez-nous</h1>
      <form @submit.prevent="sendEmail">
        <div class="mb-3">
          <label for="name">Nom :</label>
          <input type="text" v-model="formData.name" required class="form-control" />
        </div>
  
        <div class="mb-3">
          <label for="email">Email :</label>
          <input type="email" v-model="formData.email" required class="form-control" />
        </div>
  
        <div class="mb-3">
          <label for="message">Message :</label>
          <textarea v-model="formData.message" required class="form-control"></textarea>
        </div>
  
        <button type="submit" class="btn btn-primary">Envoyer</button>
      </form>
  
      <p v-if="successMessage" class="alert alert-success">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  import emailjs from "@emailjs/browser";
  
  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
        },
        successMessage: "",
      };
    },
    methods: {
      sendEmail() {
        emailjs
          .send(
            "service_b0yw24m", //  Service ID
            "template_urdy9hj", //  Template ID
            this.formData,
            "sL37uAz79ckFu1lZF" //  Public Key
          )
          .then(() => {
            this.successMessage = "Message envoyé avec succès !";
            this.formData = { name: "", email: "", message: "" };
          })
          .catch((error) => {
            console.error("Erreur lors de l'envoi :", error);
          });
      },
    },
  };
  </script>
  
  <style>
  .container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  </style>
  