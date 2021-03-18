import React from 'react';
import { StoryboardListItem } from '../components/StoryboardListItem';
import { Navigator } from '../config/Navigator';

export const StoryboardListScreen = () => {
    return (
        <div>
            <h1>Create your storyboard</h1>
            <StoryboardListItem story="Planning future" />
            <StoryboardListItem story="Book ideas" />
            <Navigator />
        </div>
    )
}