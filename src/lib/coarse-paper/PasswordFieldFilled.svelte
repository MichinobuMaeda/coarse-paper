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

<div class={"flex flex-col grow h-[68px]" + (disabled ? " opacity-40" : "")}>
  <div class="flex flex-row items-center">
    <label
      for={id}
      class={"pt-4 pb-2 px-2 grow relative block rounded-t-md border-b" +
        " bg-light-surface-container-highest dark:bg-dark-surface-container-highest" +
        " text-light-on-surface dark:text-dark-on-surface" +
        (error
          ? " border-light-error dark:border-dark-error"
          : " border-light-outline dark:border-dark-outline" +
            " focus-within:border-light-primary focus-within:dark:border-dark-primary")}
    >
      <div class="flex flex-row">
        <input
          {id}
          type={visible ? "text" : "password"}
          bind:value
          class={"peer border-none w-full text-base" +
            " focus:border-none focus:outline-none focus:ring-0" +
            " placeholder-transparent dark:placeholder-transparent" +
            " bg-light-surface-container-highest dark:bg-dark-surface-container-highest" +
            " text-light-on-surface dark:text-dark-on-surface" +
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
              ? " text-light-error dark:text-dark-error"
              : " text-light-on-surface-variant dark:text-dark-on-surface-variant" +
                " peer-focus:text-light-primary dark:peer-focus:text-dark-primary")}
        >
          {label}
        </span>
      </div>
    </label>
    <button
      id={`${id}-visible`}
      type="button"
      class={"text-base w-6 h-6 mx-2 pt-1" +
        (disabled
          ? " text-light-outline dark:text-dark-outline" + " opacity-50"
          : error
            ? " text-light-error dark:text-dark-error"
            : " text-light-outline dark:text-dark-outline" +
              " peer-focus:text-light-primary dark:peer-focus:text-dark-primary")}
      onclick={() => {
        visible = !visible;
      }}
    >
      {#if visible}
        <SvgVisibilityOn />
      {:else}
        <SvgVisibilityOff />
      {/if}
    </button>
  </div>
  {#if !error}
    <div
      class="text-sm pl-2
        text-light-on-surface dark:text-dark-on-surface"
    >
      {message}
    </div>
  {:else}
    <div
      class="text-sm pl-2
      text-light-error dark:text-dark-error"
    >
      {error}
    </div>
  {/if}
</div>
