import React, {Component} from 'react';
import {View, Image, TouchableHighlight, Dimensions} from 'react-native';

import styles from '../styles';

const windowWidth = Dimensions
    .get('window')
    .width;

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    
    onCapture() {
        this
            .props
            .camera
            .capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));

        this.props.onCapture();
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
                    {this.props.pictureTaken
                        ? <Image
                                style={styles.backButton}
                                source={require('../../assets/images/back2.png')}
                                resizeMode='contain'/>
                        : null}

                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={this.onCapture.bind(this)}
                        style={{
                        marginRight: (this.props.pictureTaken
                            ? (windowWidth * .2) / 2
                            : 0)
                    }}>
                        <Image
                            style={styles.captureButton}
                            source={require('../../assets/images/capture2.png')}
                            resizeMode='contain'/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}