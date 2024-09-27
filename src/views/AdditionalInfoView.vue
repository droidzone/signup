<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Additional Information</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="submitAdditionalInfo" class="p-4 border rounded shadow-sm">
          <div class="mb-3">
            <label for="preferredUsername" class="form-label">Preferred Username</label>
            <input type="text" class="form-control" id="preferredUsername" v-model="preferredUsername" required />
          </div>
          <div class="mb-3">
            <label for="mobileNumber" class="form-label">Mobile Number (with full country code)</label>
            <input type="tel" class="form-control" id="mobileNumber" v-model="mobileNumber" required />
          </div>
          <div class="mb-3">
            <label for="module" class="form-label">Module Required</label>
            <select class="form-select" id="module" v-model="module" required>
              <option value="">Select a module</option>
              <option value="doctor">Doctor</option>
              <option value="frontOffice">Front Office</option>
              <option value="accountant">Accountant</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary w-100">Complete Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '../stores/formStore'

const router = useRouter()
const formStore = useFormStore()

const preferredUsername = ref('')
const mobileNumber = ref('')
const module = ref('')

const submitAdditionalInfo = () => {
  const additionalInfo = {
    preferredUsername: preferredUsername.value,
    mobileNumber: mobileNumber.value,
    module: module.value
  }
  formStore.setAdditionalInfo(additionalInfo)
  router.push('/signup-success')
}
</script>
