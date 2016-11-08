import React, {Component, PropTypes} from 'react';
import {View, Image, Text} from 'react-native';
import Camera from 'react-native-camera';

import Overlay from './Overlay';

import styles from '../styles.js';

const BackgroundImage = ({
    source,
    children,
    style,
    ...props
}) => {
    return (
        <Image
            source={source}
            style={{
            flex: 1,
            width: null,
            height: null,
            ...style
        }}
            {...props}>
            {children}
        </Image>
    );
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pictureTaken: false,
            picturePath: null
        };

        this.onCapture = this
            .onCapture
            .bind(this);
        this.onBack = this
            .onBack
            .bind(this);
        this.renderMode = this
            .renderMode
            .bind(this);
    }

    onCapture() {
        if (this.camera !== undefined) {
            this
                .camera
                .capture()
                .then((data) => {
                    console.log(data);

                    this.setState({pictureTaken: true, picturePath: data.path});
                })
                .catch(err => console.error(err));
        }
    }

    onBack() {
        this.setState({pictureTaken: false, picturePath: null})
    }

    componentDidMount() {
        console.log("App: componentDidMount", this.camera);
        this.setState({camera: this.camera});
    }

    renderMode() {
        var _this = this;

        if (!_this.state.pictureTaken) {
            return (
                <Camera
                    ref={(cam) => {
                    _this.camera = cam;
                }}
                    style={styles.preview}
                    captureAudio={false}
                    captureTarget={Camera.constants.CaptureTarget.temp}
                    aspect={Camera.constants.Aspect.fill}>

                    <Overlay pictureTaken={_this.state.pictureTaken} onCapture={_this.onCapture} onBack={_this.onBack}/>

                </Camera>
            );
        }
        console.log(this.state.picturePath, typeof(this.state.picturePath));
        return (
            <BackgroundImage
                source={{
                isStatic: true,
                uri: this.state.picturePath
            }}>

                <Overlay pictureTaken={_this.state.pictureTaken} onCapture={_this.onCapture} onBack={_this.onBack}/>
            </BackgroundImage>
        );
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>{this.renderMode()}</View>
        )
    }
}

App.PropTypes = {
    pictureTaken: PropTypes.bool.isRequired,
    picturePath: PropTypes.string.isRequired
};