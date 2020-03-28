<template>
  <div>
    <h1>Tasks</h1>
    <table id="tasks" class="ui celled compact table">
      <thead>
        <tr>
          <th><i class="calender plus icon"></i>Task</th>
          <th><i class="info circle icon"></i>Details</th>
          <th><i class="lock open icon"></i></th>
          <th><i class="edit icon"></i></th>
          <th><i class="trash icon"></i></th>
          <!-- <th colspan="3"></th> -->
        </tr>
      </thead>
      <tr v-for="(task, i) in tasks" :key="i">
        <td>{{ task.task1 }}</td>
        <td>{{ task.task2 }}</td>
        <td class="center aligned" width="75">
          <router-link :to="{ name: 'show', params: { id: task._id } }"
            >Show</router-link
          >
        </td>

        <td class="center aligned" width="75">
          <router-link :to="{ name: 'edit', params: { id: task._id } }"
            >Edit</router-link
          >
        </td>

        <td
          class="center aligned"
          width="75"
          @click.prevent="onDestroy(task._id)"
        >
          <a :href="`/tasks/${task._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";

export default {
  name: "tasks",
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm("Are you sure?");
      if (!sure) return;
      await api.deletetask(id);
      this.flash("task has been deleted successfully", "success");
      const newtasks = this.tasks.filter(task => task._id !== id);
      this.tasks = newtasks;
    }
  },
  async mounted() {
    this.tasks = await api.gettasks();
  }
};
</script>

<style></style>
