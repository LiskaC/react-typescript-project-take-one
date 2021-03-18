import * as React from "react";
import { StoryboardListItem } from '../components/StoryboardListItem';

export const StoryboardListScreen = () => {
    return (
        <div>
            <h1>Create your storyboard</h1>
            <StoryboardListItem story="Planning future" />
            <StoryboardListItem story="Book ideas" />
        </div>
    )
}