<script>
  export let id;
  export let icon;
  export let ouClick;
  export let disabled = false;
</script>

<button
  {id}
  type="button"
  class={"size-10 p-2 border rounded-full text-base bg-lightSurface dark:bg-darkSurface border-lightOutline dark:border-darkOutline text-lightOnSurface dark:text-darkOnSurface" +
    (disabled ? " opacity-30" : "")}
  on:click={disabled ? () => {} : ouClick}
>
  <svelte:component this={icon} />
</button>
