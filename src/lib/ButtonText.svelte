<script>
  export let id;
  export let label;
  export let ouClick;
  export let disabled = false;
</script>

<button
  {id}
  type="button"
  class={"px-1 " +
    (disabled
      ? "opacity-50 text-lightOnSurface dark:text-darkOnSurface"
      : "text-lightPrimary dark:text-darkPrimary")}
  on:click={disabled ? () => {} : ouClick}>{label}</button
>
