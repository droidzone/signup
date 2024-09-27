import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    fullName: '',
    email: '',
    address: '',
    role: '',
    otherRole: '',
    affiliations: ''
  }),
  actions: {
    setFormData(data) {
      this.fullName = data.fullName
      this.email = data.email
      this.address = data.address
      this.role = data.role
      this.otherRole = data.otherRole
      this.affiliations = data.affiliations
    },
    clearFormData() {
      this.fullName = ''
      this.email = ''
      this.address = ''
      this.role = ''
      this.otherRole = ''
      this.affiliations = ''
    }
  }
})
