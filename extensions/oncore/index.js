import Test from '@ohif/viewer/src/test/test';
import OncorePanel from '@ohif/viewer/src/oncorePanel/oncorePanel';
import OncoreViewportRoi from '@ohif/viewer/src/oncoreViewportRoi/OncoreViewportRoi';
import OncoreToolbar from '@ohif/viewer/src/oncoreToolbar/OncoreToolbar';

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

const oncoreExtension =  {
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
  },

  getViewportModule() {
    return OncoreViewportRoi;
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
      component: OncorePanel,
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
      CustomComponent: OncoreToolbar,
    }
  ],
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE'
}

const viewportModule = {
  CustomComponent: Test
}

export default oncoreExtension;