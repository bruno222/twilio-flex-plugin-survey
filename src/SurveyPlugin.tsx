import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import { SurveyTask } from './components/SurveyTask';

const PLUGIN_NAME = 'SurveyPlugin';

export default class SurveyPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  init(flex: typeof Flex, manager: Flex.Manager) {
    flex.TaskInfoPanel.Content.replace(<SurveyTask key="SurveyTask-component" />, { if: ({ task }) => task.channelType == 'survey' });
  }
}
