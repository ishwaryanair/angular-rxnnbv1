import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  @ViewChild("cnv")
  canvas: ElementRef; // we get new elementRet object containing address of canvas DOM element

  //After ViewChild is initialized
  ngAfterViewInit(/* this = reference ClockComponent object */) {
    var ctx = this.canvas.nativeElement.getContext("2d");
    var radius = this.canvas.nativeElement.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90
    setInterval(() => this.drawClock(ctx, radius), 1000);
  }

  drawClock(ctx, radius) {
    this.drawFace(ctx, radius);
    this.drawNumbers(ctx, radius);
    this.drawTime(ctx, radius);
  }

  drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
  }

  drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
    }
  }
  
  drawTime(ctx, radius){
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      //hour
      hour=hour%12;
      hour=(hour*Math.PI/6)+
      (minute*Math.PI/(6*60))+
      (second*Math.PI/(360*60));
      this.drawHand(ctx, hour, radius*0.5, radius*0.07);
      //minute
      minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
      this.drawHand(ctx, minute, radius*0.8, radius*0.07);
      // second
      second=(second*Math.PI/30);
      this.drawHand(ctx, second, radius*0.9, radius*0.02);
  }
  
  drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0,0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
  }

  //Instance data memeber
  hour: number;
  minute: number;
  second: number;

  //instance method
  constructor(/*this= received reference of component object that calls it */) {
    //setInterval(ClockComponent.prototype.setCurrentTime.bind(this), 1000);
    setInterval(this.setCurrentTime.bind(this), 1000);
  }
  setCurrentTime(/* this */) {
    var current = new Date();
    this.hour = current.getHours();
    this.minute = current.getMinutes();
    this.second = current.getSeconds();
  }
}
