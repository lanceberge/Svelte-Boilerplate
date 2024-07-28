<script>
  import "../app.css";
</script>

<nav class="bg-main text-white w-full">
  <div class="container mx-auto px-4 py-2 flex justify-between items-center">
    <div>
      <a href="/" class="hover:text-gray-600 mx-2">home</a>
      <a href="/blog" class="hover:text-gray-600 mx-2">blog</a>
    </div>
  </div>
</nav>

<slot />

<style lang="postcss">
</style>
