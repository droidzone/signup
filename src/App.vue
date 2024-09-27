<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  fullName: '',
  email: '',
  address: '',
  role: '',
  trialReason: ''
})

const roles = [
  'Doctor',
  'Nurse',
  'Physiotherapist',
  'Dentist',
  'ENT Specialist',
  'Neurologist',
  'Dermatologist',
  'Plastic Surgeon',
  'Developer',
  'Marketing Agency',
  'Other Software Collaborator'
]

const trialReasons = [
  'To see whether this software can fit my needs',
  'To market the software',
  'To build a competing product or software',
  'To evaluate for potential partnership',
  'To learn about new technologies',
  'Other'
]

const errors = ref({})

const validateForm = () => {
  errors.value = {}
  if (!formData.fullName) errors.value.fullName = 'Full name is required'
  if (!formData.email) errors.value.email = 'Email is required'
  if (!formData.address) errors.value.address = 'Address is required'
  if (!formData.role) errors.value.role = 'Role is required'
  if (!formData.trialReason) errors.value.trialReason = 'Trial reason is required'
  return Object.keys(errors.value).length === 0
}

const submitForm = () => {
  if (validateForm()) {
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }
}
</script>

<template>
  <div class="app-container">
    <header class="bg-primary text-white py-3">
      <div class="container">
        <h1 class="mb-0">Sign up for a Trial Access to the software</h1>
      </div>
    </header>
    <nav class="bg-light py-2">
      <div class="container">
        <ul class="nav">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
        </ul>
      </div>
    </nav>
    <main class="container py-4">
      <form @submit.prevent="submitForm" class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="fullName" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="fullName" v-model="formData.fullName" required>
          <div class="invalid-feedback" v-if="errors.fullName">{{ errors.fullName }}</div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" required>
          <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address (as on govt ID)</label>
          <textarea class="form-control" id="address" v-model="formData.address" required></textarea>
          <div class="invalid-feedback" v-if="errors.address">{{ errors.address }}</div>
        </div>
        <div class="mb-3">
          <label for="role" class="form-label">Role</label>
          <select class="form-select" id="role" v-model="formData.role" required>
            <option value="" disabled selected>Choose your role</option>
            <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
          </select>
          <div class="invalid-feedback" v-if="errors.role">{{ errors.role }}</div>
        </div>
        <div class="mb-3">
          <label for="trialReason" class="form-label">Why do you want a trial access?</label>
          <select class="form-select" id="trialReason" v-model="formData.trialReason" required>
            <option value="" disabled selected>Choose your reason</option>
            <option v-for="reason in trialReasons" :key="reason" :value="reason">{{ reason }}</option>
          </select>
          <div class="invalid-feedback" v-if="errors.trialReason">{{ errors.trialReason }}</div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </main>
    <footer class="bg-dark text-white py-3 mt-4">
      <div class="container text-center">
        <p class="mb-0">&copy; 2018-28 Geekmaze Software Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.invalid-feedback {
  display: block;
}
</style>
