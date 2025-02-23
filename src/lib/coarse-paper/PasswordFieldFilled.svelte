<script>
  import SvgVisibilityOff from "../../lib/icons/SvgVisibilityOff.svelte";
  import SvgVisibilityOn from "../../lib/icons/SvgVisibilityOn.svelte";

  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {Object} value
   * @property {string} label
   * @property {string} [message]
   * @property {string} [error]
   * @property {boolean} [readonly]
   * @property {boolean} [disabled]
   */

  /** @type {Props} */
  let {
    id,
    value = $bindable(),
    label,
    message = "",
    error = "",
    readonly = false,
    disabled = false,
  } = $props();

  let visible = $state(false);
</script>

<div class={"flex flex-col grow" + (disabled ? " opacity-40" : "")}>
  <label
    for={id}
    class={"pt-4 pb-2 px-2 relative block rounded-t-md border-b" +
      " bg-lightSurfaceContainerHighest dark:bg-darkSurfaceContainerHighest" +
      " text-lightOnSurface dark:text-darkOnSurface" +
      (error
        ? " border-lightError dark:border-darkError"
        : " border-lightOutline dark:border-darkOutline" +
          " focus-within:border-lightPrimary focus-within:dark:border-darkPrimary")}
  >
    <div class="flex flex-row">
      <input
        {id}
        type={visible ? "text" : "password"}
        bind:value
        class={"peer border-none w-full text-base" +
          " focus:border-none focus:outline-none focus:ring-0" +
          " placeholder-transparent dark:placeholder-transparent" +
          " bg-lightSurfaceContainerHighest dark:bg-darkSurfaceContainerHighest" +
          " text-lightOnSurface dark:text-darkOnSurface" +
          " font-mono"}
        placeholder={label}
        {readonly}
        {disabled}
      />
      <span
        class={"peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm" +
          " peer-focus:top-2 peer-focus:text-xs pointer-events-none" +
          " absolute start-2 top-2 -translate-y-1/2 p-0.5 text-xs transition-all" +
          (error
            ? " text-lightError dark:text-darkError"
            : " text-lightOnSurfaceVariant dark:text-darkOnSurfaceVariant" +
              " peer-focus:text-lightPrimary dark:peer-focus:text-darkPrimary")}
      >
        {label}
      </span>
      <button
        id={`${id}-visible`}
        type="button"
        class={"text-base" +
          (disabled
            ? " text-lightOutline dark:text-darkOutline" + " opacity-50"
            : error
              ? " text-lightError dark:text-darkError"
              : " text-lightOutline dark:text-darkOutline" +
                " peer-focus:text-lightPrimary dark:peer-focus:text-darkPrimary")}
        onclick={() => {
          visible = !visible;
        }}
      >
        <span class="absolute end-2 top-3 w-6 h-6">
          {#if visible}
            <SvgVisibilityOn />
          {:else}
            <SvgVisibilityOff />
          {/if}
        </span>
      </button>
    </div>
  </label>
  {#if !error}
    <div
      class="text-sm pl-2
        text-lightOnSurface dark:text-darkOnSurface"
    >
      {message}
    </div>
  {:else}
    <div
      class="text-sm pl-2
      text-lightError dark:text-darkError"
    >
      {error}
    </div>
  {/if}
</div>
