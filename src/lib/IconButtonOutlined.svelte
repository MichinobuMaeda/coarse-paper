<script>
  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {any} icon
   * @property {function} onClick
   * @property {boolean} [disabled]
   */

  /** @type {Props} */
  let { id, icon, onClick, disabled = false } = $props();

  const SvelteComponent = $derived(icon);
</script>

<button
  {id}
  type="button"
  class={"size-10 p-2 border rounded-full text-base bg-lightSurface dark:bg-darkSurface border-lightOutline dark:border-darkOutline text-lightOnSurface dark:text-darkOnSurface" +
    (disabled ? " opacity-30" : "")}
  onclick={disabled ? () => {} : () => onClick()}
>
  <SvelteComponent />
</button>
