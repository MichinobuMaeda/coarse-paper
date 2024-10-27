<script>
  export let id;
  export let svg;
  export let ouClick;
  export let disabled = false;
</script>

<button
  {id}
  type="button"
  class={disabled
    ? " text-base opacity-50 text-lightOnSurface dark:text-darkOnSurface"
    : " text-base text-lightPrimary dark:text-darkPrimary"}
  on:click={disabled ? () => {} : ouClick}
>
  <svelte:component this={svg} />
</button>
