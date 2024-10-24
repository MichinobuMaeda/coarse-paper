<script>
  export let id;
  export let label;
  export let ouClick;
</script>

<button
  {id}
  type="button"
  class="px-5 py-1.5 border-none rounded-full h-10
    bg-lightPrimaryContainer dark:bg-darkPrimaryContainer
    text-lightOnPrimaryContainer dark:text-darkOnPrimaryContainer"
  on:click={ouClick}>{label}</button
>
