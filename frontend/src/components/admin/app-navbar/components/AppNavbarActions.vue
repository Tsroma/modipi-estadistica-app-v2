<template>
  <div class="app-navbar-actions">
    
    <a class="d-flex" href="/admin/my-account">
      <va-icon
        name="ion-md-contact"
        style="font-size: 25px; display: flex; margin-right: 20px;"
        class="settings-dropdown__icon"
        slot="anchor"
        :color="contextConfig.invertedColor ? $themes.gray : 'white'"
      />
    </a>
    
    <va-icon
      name="ion-md-search"
      style="font-size: 25px; display: flex; margin-right: 20px;"
      class="settings-dropdown__icon"
      slot="anchor"
      :color="contextConfig.invertedColor ? $themes.gray : 'white'"
    />
    <va-icon
      name="ion-md-key"
      style="font-size: 25px; display: flex;"
      class="settings-dropdown__icon"
      slot="anchor"
      :color="contextConfig.invertedColor ? $themes.gray : 'white'"
    />
    <settings-dropdown
      :is-top-bar.sync="isTopBarProxy"
      class="app-navbar-actions__item"
    />
    <profile-dropdown class="app-navbar-actions__item app-navbar-actions__item--profile">
      <span style="font-weight: bold;">{{userName}}</span>
    </profile-dropdown>
  </div>
</template>

<script>
import ProfileDropdown from './dropdowns/ProfileDropdown'
import SettingsDropdown from './dropdowns/SettingsDropdown'
import { ColorThemeMixin } from '../../../../services/vuestic-ui'

export default {
  name: 'app-navbar-actions',
  mixins: [ColorThemeMixin],
  inject: ['contextConfig'],
  components: {
    SettingsDropdown,
    ProfileDropdown,
  },
  props: {
    userName: {
      type: String,
      default: '',
    },
    isTopBar: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isTopBarProxy: {
      get () {
        return this.isTopBar
      },
      set (isTopBar) {
        this.$emit('update:isTopBar', isTopBar)
      },
    },
  },
}
</script>

<style lang="scss">
.app-navbar-actions {
  display: flex;

  &__item {
    margin-top: 0.3rem;
    padding: 0;
    margin-left: 1.25rem;
    margin-right: 1.25rem;

    &:last-of-type {
      margin-right: 0;
    }

    &--profile {
      display: flex;
      justify-content: center;
      margin: auto 0 auto 1.25rem;
    }

    @include media-breakpoint-down(lg) {
      margin-right: 0.25rem;
    }

    @include media-breakpoint-down(sm) {
      margin-right: 0;

      &:first-of-type {
        margin-left: 0;
      }

      &--profile {
        position: absolute;
        right: 0.75rem;
        top: 1.25rem;
        height: fit-content;
        margin: auto;
      }
    }
  }
}
</style>
