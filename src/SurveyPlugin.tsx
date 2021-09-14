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

    this.addSurveyChannel(flex);
  }

  addSurveyChannel(flex: typeof Flex) {
    const newChannel = flex.DefaultTaskChannels.createChatTaskChannel('survey', (task) => task.taskChannelUniqueName === 'survey');

    newChannel.capabilities.clear();
    // newChannel.capabilities.add(TaskChannelCapability.Call);

    const icon = (
      <svg width="1em" height="1em" viewBox="0 0 24 24">
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            d="M12 6a9.25 9.25 0 00-2.727.39c-.849.261-1.588.618-2.218 1.07-.63.454-1.13.985-1.5 1.595A3.688 3.688 0 005 11c0 .417.062.82.188 1.21.125.392.307.759.546 1.102.24.344.532.665.875.961.344.297.74.555 1.188.774l.547.281v.703l-.016.032c0 .27-.031.539-.094.804a4.963 4.963 0 01-.25.774c.47-.22.891-.472 1.266-.758.375-.287.604-.477.688-.57l.359-.438.547.078a4.193 4.193 0 00.734.047H12a9.25 9.25 0 002.727-.39c.849-.261 1.588-.618 2.218-1.07a5.434 5.434 0 001.5-1.595 3.688 3.688 0 000-3.89c-.37-.61-.87-1.14-1.5-1.594-.63-.453-1.37-.81-2.218-1.07A9.25 9.25 0 0012 6zm0-1c1.104 0 2.143.156 3.117.469.974.312 1.823.742 2.547 1.289a6.365 6.365 0 011.711 1.906c.417.724.625 1.503.625 2.336s-.208 1.612-.625 2.336a6.365 6.365 0 01-1.71 1.906c-.725.547-1.574.977-2.548 1.29-.974.312-2.013.468-3.117.468H11.578c-.146 0-.284-.003-.414-.008a3.512 3.512 0 01-.46-.055 3.813 3.813 0 01-.493.461 9.306 9.306 0 01-1.953 1.219c-.39.182-.784.31-1.18.383h-.125a.437.437 0 01-.32-.133.437.437 0 01-.133-.32.57.57 0 01.008-.094.278.278 0 01.023-.078c.146-.26.315-.612.508-1.055.193-.442.29-.888.29-1.336 0-.01.002-.018.007-.023.005-.005.008-.013.008-.024A7.31 7.31 0 015.922 15a5.623 5.623 0 01-1.047-1.164 5.33 5.33 0 01-.648-1.344A4.885 4.885 0 014 11c0-.833.208-1.612.625-2.336a6.365 6.365 0 011.71-1.906c.725-.547 1.574-.977 2.548-1.29A10.144 10.144 0 0112 5z"
            fill="currentColor"
          />
          <path
            d="M12.116 8c.09 0 .17.022.243.067a.42.42 0 01.164.182l.706 1.466 1.623.237a.447.447 0 01.359.298.437.437 0 01-.11.444l-1.185 1.185.273 1.648a.383.383 0 01-.027.238.453.453 0 01-.283.249.506.506 0 01-.243.006.407.407 0 01-.11-.043l-1.41-.76-1.417.76a.328.328 0 01-.103.043.503.503 0 01-.247-.006.453.453 0 01-.28-.25.383.383 0 01-.027-.237l.274-1.648-1.186-1.185a.429.429 0 01.03-.642.434.434 0 01.22-.1l1.623-.237.706-1.466a.42.42 0 01.164-.182.457.457 0 01.243-.067z"
            fill="currentColor"
          />
        </g>
      </svg>
    );

    newChannel.icons!.active = icon;
    newChannel.icons!.list = icon;
    newChannel.icons!.main = icon;

    flex.TaskChannels.register(newChannel);
  }
}
