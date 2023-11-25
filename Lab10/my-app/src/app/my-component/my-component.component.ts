import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointList } from './class/pointList';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class AppMyComponent implements OnInit{
  p:PointList = new PointList();
  setAll(Xn:string,Xk:string,Xh:string,Yn:string,Yk:string,Yh:string,R:string){
    this.p.p=[];
    let xn:number = parseInt(Xn);
    let xk:number = parseInt(Xk);
    let xh:number = parseInt(Xh);
    let yn:number = parseInt(Yn);
    let yk:number = parseInt(Yk);
    let yh:number = parseInt(Yh);
    let r:number = parseInt(R);
    let x:number = xn;
    let y:number = yn;
    while(x<=xk){
      while(y<=yk){
        this.p.addPoint(x,y,r);
        y+=yh;
      }
      y=yn;
      x+=xh;
    }
  }
  getColor(b:boolean){
    return b==true?'green':'red';
  }
  constructor(){};
  ngOnInit(): void {
    
  }
}
