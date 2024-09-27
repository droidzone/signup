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
          <div v-if="role === 'others'" class="mb-3">
            <label for="otherRole" class="form-label">Please specify your role</label>
            <input type="text" class="form-control" id="otherRole" v-model="otherRole" required />
          </div>
          <button type="submit" class="btn btn-primary w-100">Proceed to Terms</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '../stores/formStore'

const router = useRouter()
const formStore = useFormStore()

const fullName = ref('')
const email = ref('')
const address = ref('')
const role = ref('')
const otherRole = ref('')

onMounted(() => {
  fullName.value = formStore.fullName
  email.value = formStore.email
  address.value = formStore.address
  role.value = formStore.role
  otherRole.value = formStore.otherRole
})

const proceedToTerms = () => {
  const formData = {
    fullName: fullName.value,
    email: email.value,
    address: address.value,
    role: role.value === 'others' ? otherRole.value : role.value,
    otherRole: otherRole.value
  }
  formStore.setFormData(formData)
  router.push('/terms-and-conditions')
}
</script>
