import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    fullName: '',
    email: '',
    address: '',
    role: '',
    otherRole: '',
    affiliations: '',
    ndaAccepted: false,
    ndaAcceptanceDate: '',
    digitalSignature: '',
    preferredUsername: '',
    mobileNumber: '',
    module: ''
  }),
  actions: {
    setFormData(data) {
      Object.assign(this, data)
    },
    setAdditionalInfo(data) {
      this.preferredUsername = data.preferredUsername
      this.mobileNumber = data.mobileNumber
      this.module = data.module
    },
    clearFormData() {
      Object.keys(this.$state).forEach(key => {
        this[key] = ''
      })
      this.ndaAccepted = false
    }
  }
})
