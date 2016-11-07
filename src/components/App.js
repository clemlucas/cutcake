import React, {Component} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Camera from 'react-native-camera';

import styles from '../styles.js';

export default class App extends Component {
    takePicture() {
        this
            .camera
            .capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
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
                    aspect={Camera.constants.Aspect.fill}>
                    <Text
                        style={styles.capture}
                        onPress={this
                        .takePicture
                        .bind(this)}>[CAPTURE]</Text>
                </Camera>
            </View>
        )
    }
}