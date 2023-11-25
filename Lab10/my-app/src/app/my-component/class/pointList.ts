import { Point } from "./point";
export class PointList{
    p: Point[] = [];
    private Belongs(x:number,y:number,r:number):boolean{
        if(x>=-r && x<=r && y>=r/2 && y<r){
            return true;
        }
        else{
            return false;
        }
    }
    addPoint(x:number,y:number,r:number){
        let b = this.Belongs(x,y,r);
        let p = new Point(x,y,b);
        this.p.push(p);
    }
}