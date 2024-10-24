<script>
  export let id;
  export let label;
  export let ouClick;
</script>

<button
  {id}
  type="button"
  class="px-1 text-lightPrimary dark:text-darkPrimary"
  on:click={ouClick}>{label}</button
>
