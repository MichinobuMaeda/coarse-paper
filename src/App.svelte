<script>
  import { writable } from "svelte/store";
  import Header from "./lib/Header.svelte";
  import ButtonElevated from "./lib/coarse-paper/ButtonElevated.svelte";
  import ButtonFilled from "./lib/coarse-paper/ButtonFilled.svelte";
  import ButtonTonal from "./lib/coarse-paper/ButtonTonal.svelte";
  import ButtonOutlined from "./lib/coarse-paper/ButtonOutlined.svelte";
  import ButtonText from "./lib/coarse-paper/ButtonText.svelte";
  import IconButton from "./lib/coarse-paper/IconButton.svelte";
  import IconButtonFilled from "./lib/coarse-paper/IconButtonFilled.svelte";
  import IconButtonTonal from "./lib/coarse-paper/IconButtonTonal.svelte";
  import IconButtonOutlined from "./lib/coarse-paper/IconButtonOutlined.svelte";
  import GroupedButton from "./lib/coarse-paper/GroupedButton.svelte";
  import GroupedRadio from "./lib/coarse-paper/GroupedRadio.svelte";
  import GroupedCheckBox from "./lib/coarse-paper/GroupedCheckBox.svelte";
  import CheckBox from "./lib/coarse-paper/CheckBox.svelte";
  import Switch from "./lib/coarse-paper/Switch.svelte";
  import Filter from "./lib/coarse-paper/Filter.svelte";
  import TextFieldFilled from "./lib/coarse-paper/TextFieldFilled.svelte";
  import TextFieldOutlined from "./lib/coarse-paper/TextFieldOutlined.svelte";
  import PasswordFieldFilled from "./lib/coarse-paper/PasswordFieldFilled.svelte";
  import PasswordFieldOutlined from "./lib/coarse-paper/PasswordFieldOutlined.svelte";

  import SvgClose from "./lib/icons/SvgClose.svelte";
  import SvgCancel from "./lib/icons/SvgCancel.svelte";
  import SvgRefresh from "./lib/icons/SvgRefresh.svelte";
  import SvgContentCopy from "./lib/icons/SvgContentCopy.svelte";

  let whichButtonClicked = writable("");

  const onClickButtonElevated = () => whichButtonClicked.set("Elevated");
  const onClickButtonFilled = () => whichButtonClicked.set("Filled");
  const onClickButtonTonal = () => whichButtonClicked.set("Tonal");
  const onClickButtonOutlined = () => whichButtonClicked.set("-outlined");
  const onClickButtonText = () => whichButtonClicked.set("Text");

  let whichIconButtonClicked = writable("");

  const onClickIconButton = () => whichIconButtonClicked.set("Normal");
  const onClickIconButtonFilled = () => whichIconButtonClicked.set("Filled");
  const onClickIconButtonTonal = () => whichIconButtonClicked.set("Tonal");
  const onClickIconButtonOutlined = () =>
    whichIconButtonClicked.set("-outlined");

  let groupSelected = $state("1");
  const groupItems = [
    { label: "item 1", value: "1" },
    { label: "item 2", value: "2" },
    { label: "item 3", value: "3" },
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

  let textMultiLines = $state(`Line 1
Line 2

Line 4
`);

  let password = $state("");
</script>

<div
  class="flex flex-row justify-center
    bg-light-background dark:bg-dark-background"
>
  <div
    class="min-h-screen w-full lg:w-[1048px]
    bg-light-form dark:bg-dark-form
    text-light-on-form dark:text-dark-on-form"
  >
    <Header />
    <main class="flex flex-col m-[12px] mb-auto pb-8">
      <div class="flex flex-row flex-wrap">
        <div class="flex flex-col w-[640px]">
          <div class="flex flex-wrap p-2 gap-4">
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
          <div class="flex flex-wrap p-2 gap-4">
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
          <div class="flex flex-wrap p-2 gap-4">
            <ButtonElevated
              id="ButtonElevated"
              label="Elevated"
              onClick={onClickButtonElevated}
              danger
            />
            <ButtonFilled
              id="ButtonFilled"
              label="Filled"
              onClick={onClickButtonFilled}
              danger
            />
            <ButtonTonal
              id="ButtonTonal"
              label="Tonal"
              onClick={onClickButtonTonal}
              danger
            />
            <ButtonOutlined
              id="ButtonOutlined"
              icon={SvgContentCopy}
              label="Outlined"
              onClick={onClickButtonOutlined}
              danger
            />
            <ButtonText
              id="ButtonText"
              icon={SvgContentCopy}
              label="Text"
              onClick={onClickButtonText}
              danger
            />
          </div>
          <div class="flex flex-wrap p-2 gap-4">
            <ButtonElevated
              id="ButtonElevated"
              label="Elevated"
              onClick={onClickButtonElevated}
              dense
            />
            <ButtonFilled
              id="ButtonFilled"
              label="Filled"
              onClick={onClickButtonFilled}
              dense
            />
            <ButtonTonal
              id="ButtonTonal"
              label="Tonal"
              onClick={onClickButtonTonal}
              dense
            />
            <ButtonOutlined
              id="ButtonOutlined"
              icon={SvgContentCopy}
              label="Outlined"
              onClick={onClickButtonOutlined}
              dense
            />
          </div>
        </div>
        <div class="flex flex-wrap p-2 gap-4 w-[320px]">
          [ Clicked: {$whichButtonClicked} ]
        </div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="flex flex-wrap w-[640px]">
          <div class="flex flex-wrap p-2 gap-4">
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
            <IconButton
              id="IconButton"
              icon={SvgClose}
              onClick={onClickIconButton}
            />
          </div>
          <div class="flex flex-wrap p-2 gap-4">
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
            <IconButton
              id="IconButton"
              icon={SvgClose}
              onClick={onClickIconButton}
              disabled
            />
          </div>
          <div class="flex flex-wrap p-2 gap-4">
            <IconButtonFilled
              id="IconButtonFilled"
              icon={SvgCancel}
              onClick={onClickIconButtonFilled}
              danger
            />
            <IconButtonTonal
              id="IconButtonTonal"
              icon={SvgRefresh}
              onClick={onClickIconButtonTonal}
              danger
            />
            <IconButtonOutlined
              id="IconButtonOutlined"
              icon={SvgContentCopy}
              onClick={onClickIconButtonOutlined}
              danger
            />
            <IconButton
              id="IconButton"
              icon={SvgClose}
              onClick={onClickIconButton}
              danger
            />
          </div>
          <div class="flex flex-wrap p-2 gap-4">
            <IconButtonFilled
              id="IconButtonFilled"
              icon={SvgCancel}
              onClick={onClickIconButtonFilled}
              dense
            />
            <IconButtonTonal
              id="IconButtonTonal"
              icon={SvgRefresh}
              onClick={onClickIconButtonTonal}
              dense
            />
            <IconButtonOutlined
              id="IconButtonOutlined"
              icon={SvgContentCopy}
              onClick={onClickIconButtonOutlined}
              dense
            />
          </div>
        </div>
        <div class="flex flex-wrap p-2 gap-4 w-[320px]">
          [ Clicked: {$whichIconButtonClicked} ]
        </div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="flex flex-wrap w-[640px]">
          <div class="flex flex-wrap p-2 gap-4">
            <GroupedButton
              id="ButtonGroup1"
              items={groupItems}
              bind:value={groupSelected}
            />
          </div>
          <div class="flex flex-wrap p-2 gap-4">
            <GroupedRadio
              id="RadioGroup1"
              items={groupItems}
              bind:value={groupSelected}
            />
          </div>
        </div>
        <div class="flex flex-wrap p-2 gap-4 w-[320px]"></div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="flex flex-wrap w-[640px]">
          <div class="flex flex-wrap p-2 gap-4">
            <GroupedCheckBox
              id="GroupedCheckBox1"
              items={groupItems}
              bind:value={groupMultiSelected}
            />
          </div>
        </div>
        <div class="flex flex-wrap p-2 gap-4 w-[320px]">
          [ Selected: {JSON.stringify(groupMultiSelected)} ]
        </div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="flex flex-wrap w-[640px]">
          <div class="flex flex-wrap p-2 gap-4">
            <Switch id="Switch1" bind:checked={checked1} />
            <Switch id="Switch2" bind:checked={checked2} />
          </div>
          <div class="flex flex-wrap p-2 gap-4">
            <CheckBox id="CheckBox1" label="item 1" bind:checked={checked1} />
            <CheckBox id="CheckBox2" label="item 2" bind:checked={checked2} />
          </div>
        </div>
        <div class="flex flex-wrap p-2 gap-4 w-[320px]"></div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="flex flex-wrap w-[640px]">
          <div class="flex flex-wrap p-2 gap-4">
            <Filter id="Filter1" label="item 1" bind:checked={checked1} />
            <Filter id="Filter1" label="item 2" bind:checked={checked2} />
          </div>
          <div class="flex flex-wrap p-2 gap-4">
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
        <div class="flex flex-wrap p-2 gap-4 w-[320px]"></div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="flex flex-col flex-wrap w-[640px]">
          <div class="flex flex-wrap p-2 gap-4">
            <TextFieldFilled
              id="TextFieldFilled1"
              bind:value={textFilled1}
              label="Full name"
              message="Required"
              error={textFilled1 ? "" : "Required"}
            />
            <TextFieldFilled
              id="TextFieldFilled2"
              type="email"
              bind:value={textFilled2}
              label="E-mail"
              message="Optional"
            />
          </div>
          <div class="flex flex-wrap p-2 gap-4">
            <TextFieldFilled
              id="TextFieldFilled1"
              bind:value={textFilled1}
              label="Full name"
              message="Required"
              error={textFilled1 ? "" : "Required"}
              disabled
            />
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
        <div class="flex flex-wrap p-2 gap-4 w-[320px]"></div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="flex flex-col flex-wrap w-[640px]">
          <div class="flex flex-wrap p-2 gap-4">
            <TextFieldOutlined
              id="TextFieldOutlined1"
              label="Full name"
              bind:value={textOutlined1}
              message="Required"
              error={textOutlined1 ? "" : "Required"}
            />
            <TextFieldOutlined
              id="TextFieldOutlined2"
              type="email"
              bind:value={textOutlined2}
              label="E-mail"
              message="Optional"
            />
          </div>
          <div class="flex flex-wrap p-2 gap-4">
            <TextFieldOutlined
              id="TextFieldOutlined1"
              label="Full name"
              bind:value={textOutlined1}
              message="Required"
              error={textOutlined1 ? "" : "Required"}
              disabled
            />
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
      <div class="flex flex-row flex-wrap">
        <div class="flex flex-col flex-wrap w-[640px]">
          <div class="flex flex-wrap p-2 gap-4">
            <TextFieldFilled
              id="TextFieldFilledMultiLine1"
              label="Description"
              bind:value={textMultiLines}
              lines={5}
              message="Required"
              error={textMultiLines ? "" : "Required"}
            />
            <TextFieldOutlined
              id="TextFieldOutlinedMultiLine1"
              label="Description"
              bind:value={textMultiLines}
              lines={5}
              message="Required"
              error={textMultiLines ? "" : "Required"}
            />
          </div>
        </div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="flex flex-col flex-wrap w-[640px]">
          <div class="flex flex-wrap p-2 gap-4">
            <PasswordFieldFilled
              id="PasswordFieldOutlined1"
              label="Password"
              bind:value={password}
              message="Required"
              error={password ? "" : "Required"}
            />
            <PasswordFieldOutlined
              id="PasswordFieldOutlined2"
              label="Password"
              bind:value={password}
              message="Required"
              error={password ? "" : "Required"}
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
