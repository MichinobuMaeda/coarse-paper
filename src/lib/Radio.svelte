<script>
  export let id;
  export let name;
  export let value;
  export let label;
  export let checked = false;
  export let ouClick;
</script>

<label
  for={id}
  class="cursor-pointer items-start gap-2 text-base
    text-lightOnBackground dark:text-darkOnBackground"
>
  <input
    type="radio"
    {id}
    {name}
    {value}
    {checked}
    on:click={() => ouClick(value)}
    class="size-5 rounded align-text-bottom mr-0.5
      border-lightOutline dark:border-darkOutline
      accent-lightPrimary dark:accent-darkPrimary"
  />
  {label}
</label>
