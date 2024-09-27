<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <h2 class="card-title mb-4">Sign Up Successful!</h2>
            <p class="card-text">Thank you for signing up to MyOPIP Clinic Management Software.</p>
            <p class="card-text">You can now log in to your account.</p>
            <router-link to="/" class="btn btn-primary mt-3">Go to Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupSuccessView'
}
</script>
