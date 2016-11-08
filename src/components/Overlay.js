import React, {Component} from 'react';
import {View, Image, TouchableHighlight, Dimensions} from 'react-native';

import styles from '../styles';

const windowWidth = Dimensions
    .get('window')
    .width;

export default class Overlay extends Component {
    constructor(props) {
        super(props);
    }

    onCapture() {
        console.log("onCapture()");
        this
            .props
            .onCapture();
    }

    onBack() {
        console.log("onBack()");
        this
            .props
            .onBack();
    }

    render() {
        return (
            <View
                style={[
                styles.column, {
                    flex: 1
                }
            ]}>
                <Image
                    style={[
                    styles.partPicture, {
                        flex: .6
                    }
                ]}
                    source={require('../../assets/images/cutcake-8part.png')}
                    resizeMode="contain"/>

                <View
                    style={{
                    flex: .4,
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={this.props.pictureTaken
                        ? this
                            .onBack
                            .bind(this)
                        : this
                            .onCapture
                            .bind(this)}
                        style={{
                        marginRight: (this.props.pictureTaken
                            ? (windowWidth * .2) / 2
                            : 0)
                    }}>
                        {this.props.pictureTaken
                            ? <Image
                                    onPress={this
                                    .onBack
                                    .bind(this)}
                                    style={styles.backButton}
                                    source={require('../../assets/images/back2.png')}
                                    resizeMode='contain'/>
                            : <Image
                                style={styles.captureButton}
                                source={require('../../assets/images/capture2.png')}
                                resizeMode='contain'/>}
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}