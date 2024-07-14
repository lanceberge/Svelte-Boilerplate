<script>
 export let data;
 const {employees} = data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each employees as employee}
  <h2>{employee.first_name} {employee.last_name}</h2>
  <li>salary: {employee.salary}</li>
{/each}
