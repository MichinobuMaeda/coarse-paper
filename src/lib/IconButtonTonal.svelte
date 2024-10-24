<script>
  export let id;
  export let svg;
  export let ouClick;
</script>

<button
  {id}
  type="button"
  class="size-10 p-2 border-none rounded-full
    bg-lightPrimaryContainer dark:bg-darkPrimaryContainer
    text-lightOnPrimaryContainer dark:text-darkOnPrimaryContainer"
  on:click={ouClick}
>
  <svelte:component this={svg} />
</button>
