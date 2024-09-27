<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">MyOPIP Clinic Management Software</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="proceedToTerms" class="p-4 border rounded shadow-sm">
          <h2 class="mb-4">Sign Up</h2>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" v-model="username" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required />
          </div>
          <button type="submit" class="btn btn-primary w-100">Proceed to Terms</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    proceedToTerms() {
      // Store form data in local storage or Vuex store
      const formData = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      localStorage.setItem('signupFormData', JSON.stringify(formData))
      
      // Navigate to terms and conditions page
      this.$router.push('/terms-and-conditions')
    }
  }
}
</script>
