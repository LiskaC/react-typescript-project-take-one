import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    RouteComponentProps,
    Switch
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