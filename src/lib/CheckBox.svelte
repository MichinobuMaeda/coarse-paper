<script>
  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {string} label
   * @property {Object} checked
   */

  /** @type {Props} */
  let { id, label, checked = $bindable() } = $props();
</script>

<label
  for={id}
  class="cursor-pointer items-start gap-2 text-base
      text-lightOnBackground dark:text-darkOnBackground"
>
  <input
    type="checkbox"
    {id}
    bind:checked
    class="size-5 rounded align-text-bottom mr-0.5
      border-lightOutline dark:border-darkOutline
      accent-lightPrimary dark:accent-darkPrimary"
  />
  {label}
</label>
