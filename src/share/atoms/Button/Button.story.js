import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './';

const story = storiesOf('Button', module);

story.add('sizes', () => (
  <div>
    <div>
      <Button onClick={() => {}}>
        Default
      </Button>
      <br /><br />
    </div>

    <div>
      <Button type="primary" size="small" onClick={() => {}}>
        Small
      </Button><br /><br />
    </div>

    <div>
      <Button type="primary" size="large" onClick={() => {}}>
        Large
      </Button><br /><br />
    </div>

    <pre>{`
      <div>
        <Button onClick={() => {}}>
          Default
        </Button>
      </div>
  
      <div>
        <Button type="primary" size="small" onClick={() => {}}>
          Small
        </Button>
      </div>
  
      <div>
        <Button type="primary" size="large" onClick={() => {}}>
          Large
        </Button>
      </div>
    `}</pre>
  </div>
));

story.add('active/disable', () => (
  <div>
    <div>
      <Button type="primary" onClick={() => {}}>
        Active Button
      </Button>
    </div>

    <div>
      <Button type="primary" disabled onClick={() => {}}>
        Disable Button
      </Button>
    </div>

  </div>
));