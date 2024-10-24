<script>
  export let id;
  export let label;
  export let ouClick;
</script>

<button
  {id}
  type="button"
  class="px-5 py-1.5 border rounded-full h-10
    bg-lightSurface dark:bg-darkSurface
    text-lightOnSurface dark:text-darkOnSurface
    border-lightOutline dark:border-darkOutline"
  on:click={ouClick}>{label}</button
>
