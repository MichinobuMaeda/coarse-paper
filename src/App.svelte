<script>
  import { writable } from "svelte/store";
  import Header from "./lib/Header.svelte";
  import ButtonElevated from "./lib/ButtonElevated.svelte";
  import ButtonFilled from "./lib/ButtonFilled.svelte";
  import ButtonTonal from "./lib/ButtonTonal.svelte";
  import ButtonOutlined from "./lib/ButtonOutlined.svelte";
  import ButtonText from "./lib/ButtonText.svelte";
  import ButtonGroup from "./lib/ButtonGroup.svelte";
  import IconButton from "./lib/IconButton.svelte";
  import IconButtonFilled from "./lib/IconButtonFilled.svelte";
  import IconButtonTonal from "./lib/IconButtonTonal.svelte";
  import IconButtonOutlined from "./lib/IconButtonOutlined.svelte";
  import CheckBox from "./lib/CheckBox.svelte";
  import Switch from "./lib/Switch.svelte";
  import Filter from "./lib/Filter.svelte";
  import Radio from "./lib/Radio.svelte";
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

  let buttonGroupSelected = writable("1");

  /** @param {string} value @return void */
  const onClickButtonGroup = (value) => buttonGroupSelected.set(value);
  /** @param {string} value @return void */
  const ouEditButtonGroupSelected = (value) => buttonGroupSelected.set(value);

  let radioSelected = writable("2");

  /** @param {string} value @return void */
  const onClickRadio = (value) => radioSelected.set(value);
  /** @param {string} value @return void */
  const ouEditRadioSelected = (value) => radioSelected.set(value);

  let checked1 = writable(false);
  // let checked2 = writable(true);

  /** @param {boolean} checked @return void */
  const onClickCheckBox1 = (checked) => checked1.set(checked);
  /** @param {boolean} checked @return void */
  const onClickCheckBox2 = (checked) => checked1.set(!checked);

  // let switch1 = writable(false);
  // let switch2 = writable(true);

  /** @param {boolean} enabled @return void */
  const onClickSwitch1 = (enabled) => checked1.set(enabled);
  /** @param {boolean} enabled @return void */
  const onClickSwitch2 = (enabled) => checked1.set(!enabled);

  let textFilled1 = writable("");
  let textFilled2 = writable("user@example.com");
  let textOutlined1 = writable("");
  let textOutlined2 = writable("user@example.com");

  /** @param {string} value @return void */
  const ouInputTextFilled1 = (value) => textFilled1.set(value);
  /** @param {string} value @return void */
  const ouInputTextFilled2 = (value) => textFilled2.set(value);

  /** @param {string} value @return void */
  const ouInputTextOutlined1 = (value) => textOutlined1.set(value);
  /** @param {string} value @return void */
  const ouInputTextOutlined2 = (value) => textOutlined2.set(value);
</script>

<Header />
<main class="py-2">
  <div class="grid grid-cols-2 w-full">
    <div class="flex flex-row p-2 gap-4">
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
    <div
      class="flex flex-row p-2 gap-4 text-lightTertiary dark:text-darkTertiary"
    >
      [ Clicked: {$whichButtonClicked} ]
    </div>
  </div>
  <div class="flex flex-row p-2 gap-4">
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
  <div class="grid grid-cols-2 w-full">
    <div class="flex flex-row p-2 gap-4">
      <IconButton id="IconButton" icon={SvgClose} onClick={onClickIconButton} />
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
    <div
      class="flex flex-row p-2 gap-4 text-lightTertiary dark:text-darkTertiary"
    >
      [ Clicked: {$whichIconButtonClicked} ]
    </div>
  </div>
  <div class="flex flex-row p-2 gap-4">
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
  <div class="grid grid-cols-2 w-full">
    <div class="flex flex-row p-2 gap-4">
      <ButtonGroup
        id="ButtonGroup1"
        items={[
          {
            label: "item 1",
            value: "1",
            selected: $buttonGroupSelected == "1",
          },
          {
            label: "item 2",
            value: "2",
            selected: $buttonGroupSelected == "2",
          },
          {
            label: "item 3",
            value: "3",
            selected: $buttonGroupSelected == "3",
          },
        ]}
        onClick={onClickButtonGroup}
      />
    </div>
    <div class="flex flex-row p-2 gap-4">
      <span class="w-20">
        <TextFieldOutlined
          id="BttonGroupSelected"
          value={$buttonGroupSelected}
          label="Selected"
          message="Required"
          error={$buttonGroupSelected === "" ? "Required" : ""}
          ouInput={ouEditButtonGroupSelected}
        />
      </span>
    </div>
  </div>
  <div class="grid grid-cols-2 w-full">
    <div class="flex flex-row p-2 gap-4">
      <Radio
        id="RadioItem1"
        name="RadioName"
        value="1"
        label="item 1"
        onClick={onClickRadio}
        checked={$radioSelected === "1"}
      />
      <Radio
        id="RadioItem2"
        name="RadioName"
        value="2"
        label="item 2"
        onClick={onClickRadio}
        checked={$radioSelected === "2"}
      />
    </div>
    <div class="flex flex-row p-2 gap-4">
      <span class="w-20">
        <TextFieldFilled
          id="BttonGroupSelected"
          value={$radioSelected}
          label="Selected"
          message="Required"
          error={$radioSelected === "" ? "Required" : ""}
          ouInput={ouEditRadioSelected}
        />
      </span>
    </div>
  </div>
  <div class="flex p-2 gap-4">
    <CheckBox
      id="CheckBox1"
      label="item 1"
      checked={$checked1}
      onClick={onClickCheckBox1}
    />
    <CheckBox
      id="CheckBox2"
      label="item 2"
      checked={!$checked1}
      onClick={onClickCheckBox2}
    />
  </div>
  <div class="flex p-2 gap-4">
    <Switch id="Switch1" checked={$checked1} onClick={onClickSwitch1} />
    <Switch id="Switch2" checked={!$checked1} onClick={onClickSwitch2} />
  </div>
  <div class="flex p-2 gap-4">
    <Filter
      id="Filter1"
      label="item 1"
      checked={$checked1}
      onClick={onClickCheckBox1}
    />
    <Filter
      id="Filter1"
      label="item 2"
      checked={!$checked1}
      onClick={onClickCheckBox2}
    />
    <Filter
      id="Filter1"
      label="item 1"
      checked={$checked1}
      onClick={onClickCheckBox1}
      disabled
    />
    <Filter
      id="Filter1"
      label="item 2"
      checked={!$checked1}
      onClick={onClickCheckBox2}
      disabled
    />
  </div>
  <div class="grid grid-cols-2 w-full">
    <div class="flex flex-row p-2 gap-4">
      <TextFieldFilled
        id="TextFieldFilled1"
        value={$textFilled1}
        label="Full name"
        message="Required"
        error="Required"
        ouInput={ouInputTextFilled1}
      />
      <TextFieldFilled
        id="TextFieldFilled2"
        type="email"
        value={$textFilled2}
        label="E-mail"
        message="Optional"
        ouInput={ouInputTextFilled2}
      />
    </div>
    <div
      class="flex flex-row p-2 gap-4 text-lightTertiary dark:text-darkTertiary"
    >
      [ {$textFilled1} ] [ {$textFilled2} ]
    </div>
  </div>
  <div class="flex flex-row p-2 gap-4">
    <TextFieldFilled
      id="TextFieldFilled1"
      value={$textFilled1}
      label="Full name"
      message="Required"
      error="Required"
      ouInput={ouInputTextFilled1}
      disabled
    />
    <TextFieldFilled
      id="TextFieldFilled2"
      type="email"
      value={$textFilled2}
      label="E-mail"
      message="Optional"
      ouInput={ouInputTextFilled2}
      disabled
    />
  </div>
  <div class="grid grid-cols-2 w-full">
    <div class="flex flex-row p-2 gap-4">
      <TextFieldOutlined
        id="TextFieldOutlined1"
        label="Full name"
        value={$textOutlined1}
        message="Required"
        error="Required"
        ouInput={ouInputTextOutlined1}
      />
      <TextFieldOutlined
        id="TextFieldOutlined2"
        type="email"
        value={$textOutlined2}
        label="E-mail"
        message="Optional"
        ouInput={ouInputTextOutlined2}
      />
    </div>
    <div
      class="flex flex-row p-2 gap-4 text-lightTertiary dark:text-darkTertiary"
    >
      [ {$textOutlined1} ] [ {$textOutlined2} ]
    </div>
  </div>
  <div class="flex flex-row p-2 gap-4">
    <TextFieldOutlined
      id="TextFieldOutlined1"
      label="Full name"
      value={$textOutlined1}
      message="Required"
      error="Required"
      ouInput={ouInputTextOutlined1}
      disabled
    />
    <TextFieldOutlined
      id="TextFieldOutlined2"
      type="email"
      value={$textOutlined2}
      label="E-mail"
      message="Optional"
      ouInput={ouInputTextOutlined2}
      disabled
    />
  </div>
</main>

<style>
</style>
