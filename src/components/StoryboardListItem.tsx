import React from 'react';
import {
    Link,
} from 'react-router-dom';

interface StoryboardItemProps {
    story?: string;
}

export const StoryboardListItem = ({story}: StoryboardItemProps) => {
    return (
        <div>
            <Link to={`/${story}`}>
                <h1>{story || "This is the Storyboard list item"}</h1>
            </Link>
        </div>
    )
}