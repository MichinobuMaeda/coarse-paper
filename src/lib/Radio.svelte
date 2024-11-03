<script>
  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {any} name
   * @property {any} value
   * @property {string} label
   * @property {boolean} [checked]
   * @property {function} onClick
   */

  /** @type {Props} */
  let { id, name, value, label, checked = false, onClick } = $props();
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
    onclick={() => onClick(value)}
    class="size-5 rounded align-text-bottom mr-0.5
      border-lightOutline dark:border-darkOutline
      accent-lightPrimary dark:accent-darkPrimary"
  />
  {label}
</label>
