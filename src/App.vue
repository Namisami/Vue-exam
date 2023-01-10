<template>
  <div id="app" class="">
    <nav class="nav bg-dark px-5">
      <li class="nav-item">
        <router-link 
          class="nav-link text-light"
          to="/">
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          class="nav-link text-light"
          to="/about">
          About
        </router-link>
      </li>
    </nav>
    <router-view/>
  </div>
</template>
