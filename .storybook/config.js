import { configure } from '@storybook/react';

function loadStories() {
  const stories = require.context("../src", true, /.story\.jsx?$/);
  stories.keys().map(stories);
}

configure(loadStories, module);
