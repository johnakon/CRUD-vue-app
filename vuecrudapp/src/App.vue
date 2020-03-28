<template>
  <div id="app">
    <div class="ui inverted segment navbar mynav">
      <div class="ui center aligned container">
        <div class="large secondary inverted pointing menu compact">
          <router-link to="/tasks" exact class="item">
            <h3><i class="tasks icon"></i>Tasks</h3>
          </router-link>
          <router-link to="/tasks/new" class="item newitem">
            <h3><i class="plus circle icon"></i>New</h3>
          </router-link>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App"
};
</script>

<style>
#app > div.navbar {
  margin-bottom: 1.5em;
}

.mynav {
  background: whitesmoke;
}

.item {
  color: white;
  display: inline-flex;
}

.newitem {
  margin-left: 20px;
}
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50;
  right: 0;
}

input {
  width: 300px;
}

div.label {
  width: 120px;
}

div.input {
  margin-bottom: 10px;
}

button.ui.button {
  margin-top: 15px;
  display: block;
}
</style>
