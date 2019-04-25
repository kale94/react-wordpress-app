import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem } from 'reactstrap';

class PostList extends Component {

    render() {
        let postList;

        if (this.props.list) {
            postList = this.props.list
        } else {
            postList = (
                [
                    {name: 'dasdsaas'},
                    {name: 'dasdsaas2'}
                ]
            )
        }

        const list = postList.map((item, index) => {
            return (
                <NavItem key={index}>
                    <Link className="nav-link" to={`/blog/${item.id}`}>{item.title.rendered}</Link>
                </NavItem>
            );
        });

        return (
            <Nav vertical>
                {list}
            </Nav>
        );
    }
}

export default PostList;