import React, { Component } from 'react';
import Api from '../Api';

class BlogPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }

    componentDidMount() {
        let api = new Api();

        api.posts(this.props.match.params.id).then(data => {
            this.setState({
                title: data.title.rendered,
                content: data.content.rendered
            })
        })
    }

    render() {
        let post = this.state;

        return (
            <div>
                <div className="container" style={{ marginTop: '2rem' }}>
                    <h3>{post.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        );
    }
}

export default BlogPage;