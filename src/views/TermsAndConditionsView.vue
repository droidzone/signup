<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Terms and Conditions</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="p-4 border rounded shadow-sm">
          <h2 class="mb-4">MyOPIP Clinic Management Software Terms</h2>
          <div class="terms-content mb-4" style="max-height: 400px; overflow-y: auto;">
            <!-- Detailed terms and conditions -->
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing and using MyOPIP Clinic Management Software, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.</p>

            <h3>2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on MyOPIP's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on MyOPIP's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h3>3. Disclaimer</h3>
            <p>The materials on MyOPIP's website are provided on an 'as is' basis. MyOPIP makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h3>4. Limitations</h3>
            <p>In no event shall MyOPIP or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MyOPIP's website, even if MyOPIP or a MyOPIP authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <!-- Add more detailed terms as needed -->
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
        this.$router.push('/signup-success')
      }
    }
  }
}
</script>
