<template>
  <form @submit.prevent="onsubmit">
    <label>Nombre de Usuario *</label>
    <va-input
      class="py-2"
      v-model="username"
      type="text"
      :error="!!usernameErrors.length"
      :error-messages="usernameErrors"
    />
    <label>Contraseña *</label>
    <va-input
      v-if="showPassword"
      class="py-2"
      v-model="password"
      type="password"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors"
    >
      <va-icon
        slot="append"
        name="va-icon ion ion-ios-eye"
        @click.native="handleShowPassword()"
        style="font-size: 20px;"
      />
    </va-input>

    <va-input
      v-if="!showPassword"
      class="py-2"
      v-model="password"
      type="text"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors"
    >
      <va-icon
        slot="append"
        name="va-icon ion ion-ios-eye-off"
        @click.native="handleShowPassword()"
        style="font-size: 20px;"
      />
    </va-input>

    <div class="py-2 d-flex justify--center mt-3">
      <va-button type="submit" class="my-0" style="width: 100%;">{{ $t('auth.login') }}</va-button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import config from '@/config'
axios.defaults.baseURL = config.API_URL
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      keepLoggedIn: false,
      usernameErrors: [],
      passwordErrors: [],
      showPassword: true,
    }
  },
  computed: {
    formReady () {
      return !this.usernameErrors.length && !this.passwordErrors.length
    },
  },
  mounted() {
    this.check_token()
  },
  methods: {
    handleShowPassword () {
      this.showPassword = !this.showPassword;
    },
    onsubmit () {
      this.usernameErrors = this.username ? [] : ['Username is required']
      this.passwordErrors = this.password ? [] : ['Password is required']
      if (!this.formReady) {
        return
      }
      axios
          .post('/signin', {username: this.username, password: this.password})
          .then((response) => {
            if (response.data.invalid === 1) {
              alert('Invalid Credentials.')
              localStorage.removeItem('token')
            }
            else {
              console.log(response.data.email.slice(0, response.data.email.indexOf('@')))
              localStorage.token = response.data.token
              localStorage.uid = response.data.email.slice(0, response.data.email.indexOf('@'))
              this.$router.replace('/admin/ine-snie')
            }
          })
    },
    check_token : function () {
      const ddd = {
        username: localStorage.uid
      }
      if (localStorage.token != null) {
        axios
          .post('/check_token/', ddd, { 'headers': { 'Authorization': localStorage.token } })
          .then((response) => {
            if (response.data.invalid != 1) {
              this.$router.replace('/admin/ine-snie')
            }
          })
          .catch((error) => {
          })
      } 
    },
  },
}
</script>

<style lang="scss">
</style>
