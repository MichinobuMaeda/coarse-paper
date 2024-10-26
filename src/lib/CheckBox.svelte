<script>
  export let id;
  export let label;
  export let checked = false;
  export let ouClick;
</script>

<label
  for={id}
  class="cursor-pointer items-start gap-2
      text-lightOnBackground dark:text-darkOnBackground"
>
  <input
    type="checkbox"
    {id}
    {checked}
    on:click={() => ouClick(!checked)}
    class="size-5 rounded align-text-bottom mr-0.5
      border-lightOutline dark:border-darkOutline
      accent-lightPrimary dark:accent-darkPrimary"
  />
  {label}
</label>
