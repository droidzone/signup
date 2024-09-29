<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Additional Information</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="submitAdditionalInfo" class="p-4 border rounded shadow-sm">
          <div class="mb-3">
            <label for="preferredUsername" class="form-label">Preferred Username</label>
            <input
              type="text"
              class="form-control"
              id="preferredUsername"
              v-model="preferredUsername"
              required
            />
          </div>
          <div class="mb-3">
            <label for="mobileNumber" class="form-label"
              >Mobile Number (with full country code)</label
            >
            <input
              type="tel"
              class="form-control"
              id="mobileNumber"
              v-model="mobileNumber"
              required
            />
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
          <div class="d-flex justify-content-between">
            <button @click="goBack" class="btn btn-secondary">Back</button>
            <button type="submit" class="btn btn-primary" :disabled="isLoading">
              {{ isLoading ? 'Signing Up...' : 'Complete Sign Up' }}
            </button>
          </div>
        </form>
        <div v-if="error" class="alert alert-danger mt-3">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '../stores/formStore'
import axios from 'axios'
import * as constants from '@/constants.js'

const router = useRouter()
const formStore = useFormStore()

const goBack = () => {
  router.push('/terms-and-conditions')
}

const preferredUsername = ref('')
const mobileNumber = ref('')
const module = ref('')
const error = ref('')
const isLoading = ref(false)

// Function to get CSRF token from cookies
const getCSRFToken = () => {
  const name = 'csrftoken='
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieArray = decodedCookie.split(';')
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim()
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length)
    }
  }
  return null
}

// Set up axios to include CSRF token in all requests
onMounted(() => {
  axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()
  axios.defaults.withCredentials = true
  axios.defaults.headers.post['Content-Type'] = 'application/json'
})

const submitAdditionalInfo = async () => {
  isLoading.value = true
  error.value = '' // Clear any previous errors

  const additionalInfo = {
    preferredUsername: preferredUsername.value,
    mobileNumber: mobileNumber.value,
    module: module.value
  }
  formStore.setAdditionalInfo(additionalInfo)

  try {
    const dataToSubmit = {
      ...formStore.$state,
      ...additionalInfo
    }
    console.log('Data to be submitted:', dataToSubmit)
    console.log(`Posting to ${constants.API_SUBMIT}`)

    const response = await axios.post(constants.API_SUBMIT, dataToSubmit)
    console.log('Full response:', response)

    if (response.status === 200) {
      router.push('/signup-success')
    } else {
      error.value =
        response.data.error || 'An unexpected error occurred during signup. Please try again.'
    }
  } catch (err) {
    console.error('Error during signup:', err)
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      error.value = err.response.data.error || 'An error occurred during signup. Please try again.'
      if (err.response.status === 409) {
        // Handle conflict errors (e.g., duplicate email or username)
        error.value = err.response.data.error
      }
    } else if (err.request) {
      // The request was made but no response was received
      error.value = 'No response received from the server. Please try again later.'
    } else {
      // Something happened in setting up the request that triggered an Error
      error.value = 'An error occurred while sending the request. Please try again.'
    }
  } finally {
    isLoading.value = false
  }
}
</script>
