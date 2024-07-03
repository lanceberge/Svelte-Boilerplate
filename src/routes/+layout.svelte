<script>
  import "../app.css";
</script>

<nav class="bg-gray-200 w-full">
  <div class="container mx-auto px-4 py-2 flex justify-between items-center">
    <div>
      <a href="/" class="text-gray-800 hover:text-gray-600 mx-2">home</a>
      <a href="/blog" class="text-gray-800 hover:text-gray-600 mx-2">blog</a>
    </div>
  </div>
</nav>

<slot />

<style lang="postcss">
</style>
