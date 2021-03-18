import React from 'react';

interface StoryboardItemProps {
    story?: string;
}

export const StoryboardListItem = ({story}: StoryboardItemProps) => {
    return (
        <div>
            <h1>{story || "This is the Storyboard list item"}</h1>
        </div>
    )
}