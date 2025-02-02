<template>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-1" label="Email :" label-for="email" description="Email valid" >
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            
          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-3" label="Message:" label-for="input-3">
            <b-form-textarea
              id="input-3"
              type="textarrea"
              v-model="form.message"
              placeholder="Your message"
              
            ></b-form-textarea>
          </b-form-group>
  
       
  
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          form: {
            email: '',
            name: '',
            message: ''
          },

          show: true
        }
      },
      methods: {
        onSubmit(event) {
          event.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.email = ''
          this.form.name = ''
          this.form.message = ''

          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
      }
    }
  </script>