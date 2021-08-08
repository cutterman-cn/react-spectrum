
import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';

import {Text} from '../';

storiesOf("Text", module)
    .add(
        'default',
        () => (
            <Text margin="size-1000" color="celery-400">This is a text</Text>
        )
    )