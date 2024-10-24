<script>
  export let id;
  export let svg;
  export let ouClick;
</script>

<button
  {id}
  type="button"
  class="size-10 p-2 border-none rounded-full
    bg-lightPrimary dark:bg-darkPrimary
    text-lightOnPrimary dark:text-darkOnPrimary"
  on:click={ouClick}
>
  <svelte:component this={svg} />
</button>
