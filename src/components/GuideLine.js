import React, {Component} from 'react';

class GuideLine extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    degreesToRadians(degrees) {
        return (degrees * Math.PI)/180;
    }
    updateCanvas() {
        var nb_person = 10;
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        var centerX = Math.ceil(canvas.width / 2);
        var centerY = Math.ceil(canvas.height / 2);
        var radius = Math.ceil(canvas.width / 2) - 10;
        var interval = (Math.PI*2) / nb_person;
        ctx.strokeStyle = "rgba(33, 33, 33, 0.5)";
        ctx.lineWidth = 3;
        for(var angle = 0.0 ; angle < Math.PI*2; angle += interval){
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, angle, angle + interval);
            ctx.stroke();
        }
    }
    render() {
         return (
             <canvas ref="canvas" width={300} height={300}/>
         );
    }
}
