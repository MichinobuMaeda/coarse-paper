<script>
  export let id;
  export let svg;
  export let ouClick;
</script>

<button
  {id}
  type="button"
  class="text-lightPrimary dark:text-darkPrimary"
  on:click={ouClick}
>
  <svelte:component this={svg} />
</button>
