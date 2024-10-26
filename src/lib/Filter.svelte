<script>
  import SvgCheck from "./SvgCheck.svelte";

  export let id;
  export let label;
  export let checked = false;
  export let ouClick;
</script>

<button
  {id}
  type="button"
  class={"pr-4 py-0.5 rounded-lg h-8 " +
    (checked
      ? "pl-1 border-none bg-lightPrimaryContainer dark:bg-darkPrimaryContainer text-lightOnPrimaryContainer dark:text-darkOnPrimaryContainer"
      : "pl-4 border bg-lightSurface dark:bg-darkSurface text-lightOnSurface dark:text-darkOnSurface border-lightOutlineVariant dark:border-darkOutlineVariant")}
  on:click={() => ouClick(!checked)}
>
  <span class="flex flex-row">
    {#if checked}
      <SvgCheck />
    {/if}
    {label}
  </span>
</button>
