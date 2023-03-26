import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the gpterchat extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'gpterchat:plugin',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension gpterchat is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('gpterchat settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for gpterchat.', reason);
        });
    }
  }
};

export default plugin;
