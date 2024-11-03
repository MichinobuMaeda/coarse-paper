<script>
  export let id;
  export let icon = null;
  export let label;
  export let ouClick;
  export let disabled = false;
</script>

<button
  {id}
  type="button"
  class={"px-1 text-base " +
    (disabled
      ? "opacity-50 text-lightOnSurface dark:text-darkOnSurface"
      : "text-lightPrimary dark:text-darkPrimary")}
  on:click={disabled ? () => {} : ouClick}
>
  <span class="flex flex-row gap-0.5">
    {#if icon !== null}
      <svelte:component this={icon} />
    {/if}
    {label}
  </span>
</button>
