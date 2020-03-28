<template>
  <div>
    <h1>Show task</h1>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="tasks icon"></i> Task</div>
      <input type="text" readonly :value="task.task1" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info circle icon"></i> Details</div>
      <input type="text" readonly :value="task.task2" />
    </div>

    <div id="smallNav">
      <span class="actions edit-task">
        <router-link
          :to="{ name: 'edit', params: { id: this.$route.params.id } }"
        >
          Edit task
        </router-link>
      </span>
      <span class="actions show-tasks">
        <router-link :to="{ name: 'tasks' }">
          Show tasks
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  name: "show",
  data() {
    return {
      task: ""
    };
  },
  async mounted() {
    this.task = await api.gettask(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: inline-flex;
  color: teal;
  text-decoration: none !important;
  margin: 20px 10px;
}

.edit-task {
  border-bottom: green 2px solid;
}

.show-tasks {
  border-bottom: blue 2px solid;
  margin-left: 20px;
}
</style>
