<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">MyOPIP Clinic Management Software</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="submitForm" class="p-4 border rounded shadow-sm">
          <h2 class="mb-4">Sign Up</h2>
          <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName" v-model="firstName" required />
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" v-model="lastName" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required />
          </div>
          <div class="mb-3">
            <label for="dateOfBirth" class="form-label">Date of Birth</label>
            <input
              type="date"
              class="form-control"
              id="dateOfBirth"
              v-model="dateOfBirth"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dateOfBirth: ''
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log('Form submitted', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        dateOfBirth: this.dateOfBirth
      })
    }
  }
}
</script>
