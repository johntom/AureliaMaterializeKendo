#### Getting the plugin

In your project install the plugin via jspm with following command:

  ```
    $ jspm install aurelia-materialize-bridge
  ```

#### Configure your app

1. Make sure you use [manual bootstrapping](http://aurelia.io/docs#/aurelia/framework/1.0.0-beta.1.0.8/doc/article/app-configuration-and-startup). In order to do so open your `index.html` and locate the element with the attribute aurelia-app:

  ```html
  <body aurelia-app="main">
  ...
```

2. Update  `main.js` in your `src` folder with following content:

  ```javascript
  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      // Install and configure the plugin
      .plugin('aurelia-materialize-bridge', bridge => bridge.useAll() );

  aurelia.start().then(a => a.setRoot());
  }
  ```

  **Note:** The above shows how to use all available controls at once. If you choose to pick which you'd like to use, you can ```use``` single components like this:

  ```javascript
  .plugin('aurelia-materialize-bridge', bridge => {
    bridge
      .useButton()
      .useCollapsible()
      .useModal()
      .useTabs();
  });
  ```

  Here is a full list of currently available options:

  ```javascript
  .plugin('aurelia-materialize-bridge', bridge => {
    bridge
      .useBox()
      .useButton()
      .useCard()
      .useCarousel()
      .useCheckbox()
      .useCollapsible()
      .useColors()
      .useDatePicker()
      .useDropdown()
      .useFab()
      .useModal()
      .useNavbar()
      .useParallax()
      .usePushpin()
      .useScrollfire()
      .useScrollSpy()
      .useSelect()
      .useSidenav()
      .useSlider()
      .useSwitch()
      .useTabs()
      .useTooltip()
      .useTransitions()
      .useWaves()
      .useWell();
  });
  ```

#### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.

**We recommend that you read [these instructions](#/help/docs/app_developers_tutorials/7._next_actions) in order to get started**
