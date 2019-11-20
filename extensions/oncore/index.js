import Test from '@ohif/viewer/src/test/test';

const actions = {
  logger: () => {
    console.log('This is message from the oncore extension!');
  }
}

const definitions = {
  showLogger: {
    commandFn: actions.logger,
    storeContexts: ['viewports'],
    options: {}
  }
}

export default {
  id: 'oncore',
  // getCommandsModule() {
  //   return {
  //     actions,
  //     definitions,
  //     defaultContext: 'VIEWPORT'
  //   }
  //
  // }

  getToolbarModule() {
    return toolbarModule;
  },

  getPanelModule() {
    return panelModule;
  }
}

const panelModule = {
  menuOptions: [
    {
      icon: 'th-list',
      label: 'Segments',
      target: 'segment-panel',
    },
  ],
  components: [
    {
      id: 'segment-panel',
      component: Test,
    },
  ],
  defaultContext: ['VIEWER'],
};

const toolbarModule = {
  definitions: [
    {
      id: 'Custom',
      label: 'Custom',
      icon: 'level',
      CustomComponent: Test,
    }
  ],
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE'
}