<template>
  <div>
    <div class="sidebar-header">
      <!-- logo -->
      <div class="logo">
        <img
          src="https://ja.nuxtjs.org/logos/nuxt-icon.png"
          style=" max-height: 64px;width: 100%;object-fit: contain;"
        />
      </div>
      <!-- search bar -->
      <div>
        <v-text-field
          outlined
          dense
          flat
          solo
          label="search"
          hide-details
          class="ma-2"
        ></v-text-field>
      </div>
    </div>
    <div class="SidebarNav-top-fade"></div>
  </div>
</template>
