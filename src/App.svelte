<script>
  import { writable } from "svelte/store";
  import Header from "./lib/Header.svelte";
  import ButtonElevated from "./lib/ButtonElevated.svelte";
  import ButtonFilled from "./lib/ButtonFilled.svelte";
  import ButtonTonal from "./lib/ButtonTonal.svelte";
  import ButtonOutlined from "./lib/ButtonOutlined.svelte";
  import ButtonText from "./lib/ButtonText.svelte";
  import IconButton from "./lib/IconButton.svelte";
  import IconButtonFilled from "./lib/IconButtonFilled.svelte";
  import IconButtonTonal from "./lib/IconButtonTonal.svelte";
  import IconButtonOutlined from "./lib/IconButtonOutlined.svelte";
  import GroupedButton from "./lib/GroupedButton.svelte";
  import GroupedRadio from "./lib/GroupedRadio.svelte";
  import GroupedCheckBox from "./lib/GroupedCheckBox.svelte";
  import CheckBox from "./lib/CheckBox.svelte";
  import Switch from "./lib/Switch.svelte";
  import Filter from "./lib/Filter.svelte";
  import TextFieldFilled from "./lib/TextFieldFilled.svelte";
  import TextFieldOutlined from "./lib/TextFieldOutlined.svelte";

  import SvgClose from "./lib/SvgClose.svelte";
  import SvgCancel from "./lib/SvgCancel.svelte";
  import SvgRefresh from "./lib/SvgRefresh.svelte";
  import SvgContentCopy from "./lib/SvgContentCopy.svelte";

  let whichButtonClicked = writable("");

  const onClickButtonElevated = () => whichButtonClicked.set("Elevated");
  const onClickButtonFilled = () => whichButtonClicked.set("Filled");
  const onClickButtonTonal = () => whichButtonClicked.set("Tonal");
  const onClickButtonOutlined = () => whichButtonClicked.set("Outlined");
  const onClickButtonText = () => whichButtonClicked.set("Text");

  let whichIconButtonClicked = writable("");

  const onClickIconButton = () => whichIconButtonClicked.set("Normal");
  const onClickIconButtonFilled = () => whichIconButtonClicked.set("Filled");
  const onClickIconButtonTonal = () => whichIconButtonClicked.set("Tonal");
  const onClickIconButtonOutlined = () =>
    whichIconButtonClicked.set("Outlined");

  let groupSelected = $state("1");
  const groupItems = [
    {
      label: "item 1",
      value: "1",
    },
    {
      label: "item 2",
      value: "2",
    },
    {
      label: "item 3",
      value: "3",
    },
  ];

  let groupMultiSelected = $state(["2"]);

  let checked1 = $state(false);
  let checked2 = $state(true);

  $effect(() => {
    checked2 = !checked1;
  });

  $effect(() => {
    checked1 = !checked2;
  });

  let textFilled1 = $state("");
  let textFilled2 = $state("user@example.com");
  let textOutlined1 = $state("");
  let textOutlined2 = $state("user@example.com");
</script>

<div
  class="flex flex-row justify-center
    bg-lightSurfaceVariant dark:bg-darkSurfaceVariant"
>
  <div
    class="min-h-screen justify-between max-w-5xl
    bg-lightBackground dark:bg-darkBackground
    text-lightOnBackground dark:text-darkOnBackground"
  >
    <Header />
    <main class="flex flex-col p-4 gap-4 mb-auto">
      <div class="grid grid-flow grid-cols-3 gap-4">
        <div class="grid grid-rows-2 col-span-3 lg:col-span-2 gap-4">
          <div class="flex flex-wrap gap-4">
            <ButtonElevated
              id="ButtonElevated"
              label="Elevated"
              onClick={onClickButtonElevated}
            />
            <ButtonFilled
              id="ButtonFilled"
              label="Filled"
              onClick={onClickButtonFilled}
            />
            <ButtonTonal
              id="ButtonTonal"
              label="Tonal"
              onClick={onClickButtonTonal}
            />
            <ButtonOutlined
              id="ButtonOutlined"
              icon={SvgContentCopy}
              label="Outlined"
              onClick={onClickButtonOutlined}
            />
            <ButtonText
              id="ButtonText"
              icon={SvgContentCopy}
              label="Text"
              onClick={onClickButtonText}
            />
          </div>
          <div class="flex flex-wrap gap-4">
            <ButtonElevated
              id="ButtonElevated"
              label="Elevated"
              onClick={onClickButtonElevated}
              disabled
            />
            <ButtonFilled
              id="ButtonFilled"
              label="Filled"
              onClick={onClickButtonFilled}
              disabled
            />
            <ButtonTonal
              id="ButtonTonal"
              label="Tonal"
              onClick={onClickButtonTonal}
              disabled
            />
            <ButtonOutlined
              id="ButtonOutlined"
              icon={SvgContentCopy}
              label="Outlined"
              onClick={onClickButtonOutlined}
              disabled
            />
            <ButtonText
              id="ButtonText"
              icon={SvgContentCopy}
              label="Text"
              onClick={onClickButtonText}
              disabled
            />
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1 flex gap-4">
          [ Clicked: {$whichButtonClicked} ]
        </div>
        <div class="grid sm:grid-cols-2 col-span-3 lg:col-span-2 gap-4">
          <div class="flex flex-wrap gap-4">
            <IconButton
              id="IconButton"
              icon={SvgClose}
              onClick={onClickIconButton}
            />
            <IconButtonFilled
              id="IconButtonFilled"
              icon={SvgCancel}
              onClick={onClickIconButtonFilled}
            />
            <IconButtonTonal
              id="IconButtonTonal"
              icon={SvgRefresh}
              onClick={onClickIconButtonTonal}
            />
            <IconButtonOutlined
              id="IconButtonOutlined"
              icon={SvgContentCopy}
              onClick={onClickIconButtonOutlined}
            />
          </div>
          <div class="flex flex-wrap gap-4">
            <IconButton
              id="IconButton"
              icon={SvgClose}
              onClick={onClickIconButton}
              disabled
            />
            <IconButtonFilled
              id="IconButtonFilled"
              icon={SvgCancel}
              onClick={onClickIconButtonFilled}
              disabled
            />
            <IconButtonTonal
              id="IconButtonTonal"
              icon={SvgRefresh}
              onClick={onClickIconButtonTonal}
              disabled
            />
            <IconButtonOutlined
              id="IconButtonOutlined"
              icon={SvgContentCopy}
              onClick={onClickIconButtonOutlined}
              disabled
            />
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1 flex gap-4">
          [ Clicked: {$whichIconButtonClicked} ]
        </div>
        <div class="grid sm:grid-cols-2 col-span-3 lg:col-span-2 gap-4">
          <div class="flex flex-wrap gap-4">
            <GroupedButton
              id="ButtonGroup1"
              items={groupItems}
              bind:value={groupSelected}
            />
          </div>
          <div class="flex flex-wrap gap-4">
            <GroupedRadio
              id="RadioGroup1"
              items={groupItems}
              bind:value={groupSelected}
            />
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1 flex gap-4"></div>
        <div class="grid col-span-3 lg:col-span-2 gap-4">
          <div class="flex flex-wrap gap-4">
            <GroupedCheckBox
              id="GroupedCheckBox1"
              items={groupItems}
              bind:value={groupMultiSelected}
            />
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1 flex gap-4">
          [ Selected: {JSON.stringify(groupMultiSelected)} ]
        </div>
        <div class="grid sm:grid-cols-2 col-span-3 lg:col-span-2 gap-4">
          <div class="flex flex-wrap gap-4">
            <Switch id="Switch1" bind:checked={checked1} />
            <Switch id="Switch2" bind:checked={checked2} />
          </div>
          <div class="flex flex-wrap gap-4">
            <CheckBox id="CheckBox1" label="item 1" bind:checked={checked1} />
            <CheckBox id="CheckBox2" label="item 2" bind:checked={checked2} />
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1 flex gap-4"></div>
        <div class="grid sm:grid-cols-2 col-span-3 lg:col-span-2 gap-4">
          <div class="flex flex-wrap gap-4">
            <Filter id="Filter1" label="item 1" bind:checked={checked1} />
            <Filter id="Filter1" label="item 2" bind:checked={checked2} />
          </div>
          <div class="flex flex-wrap gap-4">
            <Filter
              id="Filter1"
              label="item 1"
              bind:checked={checked1}
              disabled
            />
            <Filter
              id="Filter1"
              label="item 2"
              bind:checked={checked2}
              disabled
            />
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1 flex gap-4"></div>
        <div
          class="grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 col-span-3 lg:col-span-2 gap-4"
        >
          <div class="flex flex-wrap gap-4">
            <TextFieldFilled
              id="TextFieldFilled1"
              bind:value={textFilled1}
              label="Full name"
              message="Required"
              error={textFilled1 ? "" : "Required"}
            />
          </div>
          <div class="flex flex-wrap gap-4">
            <TextFieldFilled
              id="TextFieldFilled2"
              type="email"
              bind:value={textFilled2}
              label="E-mail"
              message="Optional"
            />
          </div>
          <div class="flex flex-wrap gap-4">
            <TextFieldFilled
              id="TextFieldFilled1"
              bind:value={textFilled1}
              label="Full name"
              message="Required"
              error={textFilled1 ? "" : "Required"}
              disabled
            />
          </div>
          <div class="flex flex-wrap gap-4">
            <TextFieldFilled
              id="TextFieldFilled2"
              type="email"
              bind:value={textFilled2}
              label="E-mail"
              message="Optional"
              disabled
            />
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1 flex gap-4"></div>
        <div
          class="grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 col-span-3 lg:col-span-2 gap-4"
        >
          <div class="flex flex-wrap gap-4">
            <TextFieldOutlined
              id="TextFieldOutlined1"
              label="Full name"
              bind:value={textOutlined1}
              message="Required"
              error={textOutlined1 ? "" : "Required"}
            />
          </div>
          <div class="flex flex-wrap gap-4">
            <TextFieldOutlined
              id="TextFieldOutlined2"
              type="email"
              bind:value={textOutlined2}
              label="E-mail"
              message="Optional"
            />
          </div>
          <div class="flex flex-wrap gap-4">
            <TextFieldOutlined
              id="TextFieldOutlined1"
              label="Full name"
              bind:value={textOutlined1}
              message="Required"
              error={textOutlined1 ? "" : "Required"}
              disabled
            />
          </div>
          <div class="flex flex-wrap gap-4">
            <TextFieldOutlined
              id="TextFieldOutlined2"
              type="email"
              bind:value={textOutlined2}
              label="E-mail"
              message="Optional"
              disabled
            />
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1 flex gap-4"></div>
      </div>
      <div class="col-span-3 lg:col-span-1 flex gap-4"></div>
    </main>
  </div>
</div>
