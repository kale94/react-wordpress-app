import React, { Component } from 'react';
import Api from '../Api';

class PagePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }

    componentDidMount() {
        this.getPageData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getPageData();
        }
    }

    getPageData() {
        let api = new Api();

        api.pages({ id: this.props.match.params.id }).then(data => {
            if (data[0] !== undefined) {
                this.setState({
                    title: data[0].title.rendered,
                    content: data[0].content.rendered
                })
            } else {
                window.location.replace('/404') // Redirect user to NotFoundPage
            }
        })
    }

    render() {
        let post = this.state;
        return (
            <div>
                <div className="container" style={{ marginTop: '2rem' }}>
                    <h3>{post.title}</h3>
                    <div dangerouslySetInnerHTML={{__html: post.content}}/>
                </div>
            </div>
        );
    }
}

export default PagePage;