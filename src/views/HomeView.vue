<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">MyOPIP Clinic Management Software</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="proceedToTerms" class="p-4 border rounded shadow-sm">
          <h2 class="mb-4">Sign Up</h2>
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="fullName" v-model="fullName" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email" required />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <textarea class="form-control" id="address" v-model="address" required></textarea>
          </div>
          <div class="mb-3">
            <label for="role" class="form-label">Role</label>
            <select class="form-select" id="role" v-model="role" required>
              <option value="">Select a role</option>
              <option value="doctor">Doctor</option>
              <option value="nurse">Nurse</option>
              <option value="pharmacist">Pharmacist</option>
              <option value="physiotherapist">Physiotherapist</option>
              <option value="ophthalmologist">Ophthalmologist</option>
              <option value="neurologist">Neurologist</option>
              <option value="neurosurgeon">Neurosurgeon</option>
              <option value="other_clinical_doctor">Other clinical doctor</option>
              <option value="other_paramedical">Other paramedical</option>
              <option value="dentist">Dentist</option>
              <option value="developer">Developer</option>
              <option value="marketing">Marketing Agency</option>
              <option value="collaborator">Other Software Collaborator</option>
              <option value="others">Others</option>
            </select>
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
      fullName: '',
      email: '',
      address: '',
      role: ''
    }
  },
  methods: {
    proceedToTerms() {
      // Store form data in local storage or Vuex store
      const formData = {
        fullName: this.fullName,
        email: this.email,
        address: this.address,
        role: this.role
      }
      localStorage.setItem('signupFormData', JSON.stringify(formData))
      
      // Navigate to terms and conditions page
      this.$router.push('/terms-and-conditions')
    }
  }
}
</script>
