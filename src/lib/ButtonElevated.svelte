<script>
  export let id;
  export let label;
  export let ouClick;
</script>

<button
  {id}
  type="button"
  class="px-5 py-1.5 border-none rounded-full h-10
    bg-lightSurfaceContainer dark:bg-darkSurfaceContainer
    text-lightPrimary dark:text-darkPrimary
    shadow-sm
    shadow-lightShadow dark:shadow-darkShadow"
  on:click={ouClick}>{label}</button
>
