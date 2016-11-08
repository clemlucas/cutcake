import React, {Component} from 'react';
import {View, Image, TouchableHighlight, Dimensions} from 'react-native';
import GuideLine from './GuideLine';

import styles from '../styles';

const windowWidth = Dimensions
    .get('window')
    .width;

export default class Overlay extends Component {
    constructor(props) {
        super(props);

        this.renderControl = this
            .renderControl
            .bind(this);
        this.onBack = this
            .render
            .bind(this);
        this.onCapture = this
            .render
            .bind(this);
    }

    onCapture() {
        this
            .props
            .onCapture();
    }

    onBack() {
        this
            .props
            .onBack();
    }

    renderControl() {
        if (this.props.pictureTaken) {
            return (
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={this
                    .onBack
                    .bind(this)}>
                    <Image
                        onPress={this
                        .onBack
                        .bind(this)}
                        style={styles.backButton}
                        source={require('../../assets/images/back2.png')}
                        resizeMode='contain'/>
                </TouchableHighlight>
            );
        }
        return (
            <TouchableHighlight
                underlayColor='transparent'
                onPress={this
                .onCapture
                .bind(this)}>
                <Image
                    style={styles.captureButton}
                    source={require('../../assets/images/capture2.png')}
                    resizeMode='contain'/>
            </TouchableHighlight>
        );
    }

    // <Image                     style={[
    // styles.partPicture, {                             flex: .6
    //      }                     ]}
    // source={require('../../assets/images/cutcake-8part.png')}
    // resizeMode="contain"/>
    render() {
        return (
            <View
                style={[
                styles.column, {
                    flex: 1
                }
            ]}>
                <GuideLine/>

                <View
                    style={{
                    flex: .4,
                    justifyContent: 'center'
                }}>
                    {this.renderControl()}
                </View>
            </View>
        );
    }
}
