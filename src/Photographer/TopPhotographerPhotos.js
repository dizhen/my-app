import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';

export default class TopPhotographerPhotos extends Component {
    render() {
        return (
            <Gallery
                images = {this.props.photos}
            />
        );
    };
}


/**import React, {Component} from 'react';
import Lightbox from 'react-images';

const gutter = {
    small: 2,
    large: 4,
};

const styles = {
    gallery: {
        marginRight: -gutter.small,
        overflow: 'hidden',

        '@media (minWidth: 500px)': {
            marginRight: -gutter.large,
        },
    },

    // anchor
    thumbnail: {
        boxSizing: 'border-box',
        display: 'block',
        float: 'left',
        lineHeight: 0,
        paddingRight: gutter.small,
        paddingBottom: gutter.small,
        overflow: 'hidden',

        '@media (minWidth: 500px)': {
            paddingRight: gutter.large,
            paddingBottom: gutter.large,
        },
    },

    // orientation
    landscape: {
        width: '30%',
    },
    square: {
        paddingBottom: 0,
        width: '40%',

        '@media (minWidth: 500px)': {
            paddingBottom: 0,
        },
    },
    source:{
        border: 0,
        display: 'inline',
        height: 'auto',
        maxWidth: '50%',
        width: 'auto',
    }
}

export default class TopPhotographerPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            lightboxIsOpen: false
        };
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    renderGallery() {
        const gallery = this.props.photos.map((obj, i) => {
            //console.log(obj);
            return (
                <a
                    href={obj.src}
                    style={styles.thumbnail, styles[obj.orientation]}
                    key={i}
                    onClick={(e) => this.openLightbox(i, e)}
                >
                    <img src={obj.src} style={styles.source} />
                </a>
            );
        });

        return (
            <div style={styles.gallery}>
                {gallery}
            </div>
        );
    }

    render() {
        const photos = this.props.photos;
        return (
            <div>
                {this.renderGallery()}
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={photos}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    isOpen={this.state.lightboxIsOpen}
                    onClose={this.closeLightbox}/>
            </div>
        );
    }
}**/
