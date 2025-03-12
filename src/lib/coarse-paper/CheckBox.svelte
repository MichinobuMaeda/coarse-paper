<script>
  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {string} label
   * @property {boolean} checked
   */

  /** @type {Props} */
  let { id, label, checked = $bindable() } = $props();
</script>

<label
  for={id}
  class="cursor-pointer items-start gap-2 text-base
      text-light-on-background dark:text-dark-on-background"
>
  <input
    type="checkbox"
    {id}
    bind:checked
    class="size-5 rounded align-text-bottom mr-0.5
      border-light-outline dark:border-dark-outline
      accent-light-primary dark:accent-dark-primary"
  />
  {label}
</label>
