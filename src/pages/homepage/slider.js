import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        slide_img: 'data:image/svg+xml;charset=UTF-8,%3Csvg width%3D"1178" height%3D"500" xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" viewBox%3D"0 0 800 400" preserveAspectRatio%3D"none"%3E%3Cdefs%3E%3Cstyle type%3D"text%2Fcss"%3E%23holder_15ba800aa1d text %7B fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C monospace%3Bfont-size%3A40pt %7D %3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg id%3D"holder_15ba800aa1d"%3E%3Crect width%3D"800" height%3D"400" fill%3D"%23777"%3E%3C%2Frect%3E%3Cg%3E%3Ctext x%3D"285.921875" y%3D"218.3"%3ELoad slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        slide_name: 'Load img',
    },

    {
        slide_img: 'data:image/svg+xml;charset=UTF-8,%3Csvg width%3D"1178" height%3D"500" xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" viewBox%3D"0 0 800 400" preserveAspectRatio%3D"none"%3E%3Cdefs%3E%3Cstyle type%3D"text%2Fcss"%3E%23holder_15ba800aa1d text %7B fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C monospace%3Bfont-size%3A40pt %7D %3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg id%3D"holder_15ba800aa1d"%3E%3Crect width%3D"800" height%3D"400" fill%3D"%23777"%3E%3C%2Frect%3E%3Cg%3E%3Ctext x%3D"285.921875" y%3D"218.3"%3ELoad slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        slide_name: 'Load img 2',
    }
];

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.slides.length  - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.slides.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        let slidesMap;

        if (this.props.slides) {
            slidesMap = this.props.slides
        } else {
            slidesMap = items
        }

        const slides = slidesMap.map((item, index) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={index}
                >
                    <img src={item.slide_img} alt={item.slide_name} />
                    <CarouselCaption captionText={item.slide_name} captionHeader={item.slide_name} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={slidesMap} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

export default Slider;