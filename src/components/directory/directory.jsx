import React, { Component } from 'react';
import sections from './directory.data';
import MenuItem from '../menu-item/menu-item';
import './directory.styles.scss';

export default class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: sections
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        );
    }
}
