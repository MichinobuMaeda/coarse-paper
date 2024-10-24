<script>
  export let id;
  export let label;
  export let ouClick;
</script>

<button
  {id}
  type="button"
  class="px-5 py-1.5 border-none rounded-full h-10
    bg-lightPrimary dark:bg-darkPrimary
    text-lightOnPrimary dark:text-darkOnPrimary"
  on:click={ouClick}>{label}</button
>
