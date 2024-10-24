<script>
  export let id;
  export let svg;
  export let ouClick;
</script>

<button
  {id}
  type="button"
  class="size-10 p-2 border rounded-full
    bg-lightSurface dark:bg-darkSurface
    text-lightOnSurface dark:text-darkOnSurface
    border-lightOutline dark:border-darkOutline"
  on:click={ouClick}
>
  <svelte:component this={svg} />
</button>
