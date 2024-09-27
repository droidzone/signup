<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Terms and Conditions</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="p-4 border rounded shadow-sm">
          <h2 class="mb-4">MyOPIP Clinic Management Software Terms</h2>
          <div class="terms-content mb-4" style="max-height: 300px; overflow-y: auto;">
            <!-- Add your detailed terms and conditions here -->
            <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>2. Nullam auctor, nunc id aliquam tincidunt, nisl nunc tincidunt nunc, vitae aliquam nunc nunc vitae nunc.</p>
            <p>3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <!-- Add more terms as needed -->
          </div>
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" v-model="accepted" id="acceptTerms">
            <label class="form-check-label" for="acceptTerms">
              I have read and agree to the terms and conditions
            </label>
          </div>
          <button @click="submitForm" class="btn btn-primary w-100" :disabled="!accepted">Accept and Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accepted: false
    }
  },
  methods: {
    submitForm() {
      if (this.accepted) {
        // Retrieve form data from local storage
        const formData = JSON.parse(localStorage.getItem('signupFormData'))
        
        // Handle form submission here
        console.log('Form submitted with accepted terms', formData)
        
        // Clear local storage
        localStorage.removeItem('signupFormData')
        
        // Redirect to a success page or login page
        this.$router.push('/')
      }
    }
  }
}
</script>
