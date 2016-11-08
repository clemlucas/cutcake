import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Camera from 'react-native-camera';

import Footer from './Footer';

import styles from '../styles.js';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pictureTaken: false,
            camera: null
        };
    }

    onCapture() {
        this.setState({
            pictureTaken: !(this.state.pictureTaken)
        });
    }

    componentDidMount() {
        console.log("App: componentDidMount", this.camera);
        this.setState({camera: this.camera});
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Camera
                    ref={(cam) => {
                    this.camera = cam;
                }}
                    style={styles.preview}
                    captureAudio={false}
                    captureTarget={Camera.constants.CaptureTarget.temp}
                    aspect={Camera.constants.Aspect.fill}>

                    <Footer
                        camera={this.state.camera}
                        pictureTaken={this.state.pictureTaken}
                        onCapture={this
                        .onCapture
                        .bind(this)}/>

                </Camera>
            </View>
        )
    }
}

App.PropTypes = {
    pictureTaken: PropTypes.bool.isRequired,
    camera: PropTypes.object.isRequired,
};