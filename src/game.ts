type Position_x = number;
type Position_y = number;
type Position = [Position_x, Position_y];
class Player {
    postion:Position
    size:Size
    constructor(postion_inp:Position){
        this.postion = postion_inp;
        this.size = new Size();
    } // 
     
}
class Postion  {
    public x: number;
    public y: number;
    public r_x: number;
    public r_y: number;
    SetX(input_x: number) {
        this.x = input_x;
    }
    SetY(input_y: number) {
        this.y = input_y;
    }
     SetPosition(input_x: number, input_y: number) {
        this.x = input_x;
        this.y = input_y;
    }
    GetX() {
        return this.x;
    }
    GetY() {
        return this.y;
    }
    GetPosition(): number[] {
        return [this.x, this.y];
    }
    ChangeXBy(input_x: number) {
        this.x += input_x;
    }
    ChangeYBy(input_y: number) {
        this.y += input_y;
    }
    ChangePositionBy(input_x: number, input_y: number) {
        this.x += input_x;
        this.y += input_y;
    } 
     SetRotationX(input_x: number) {
        this.r_x = input_x;
    }
     SetRotationY(input_y: number) {
        this.r_y = input_y;
    }
     SetRotation(input_x: number, input_y: number) {
        this.r_x = input_x;
        this.r_y = input_y;
    }


  


    GetRotation(): number[] {
        return [this.r_x, this.r_y];
    }


 
}
class Size {
    width: number;
    height: number;
    protected init(){
        return
    }
    SetWidth(input_width: number) {
        this.width = input_width;
    }
    SetHeight(input_height: number) {
        this.height = input_height;
    }
    SetSize(input_width: number, input_height: number) {
        this.width = input_width;
        this.height = input_height;
    }
    GetWidth() {
        return this.width;
    }
    GetHeight() {
        return this.height;
    }
    GetSize(): number[] {
        return [this.width, this.height];
    }
    ChangeWidthBy(input_width: number) {
        this.width += input_width;
    }
    ChangeHeightBy(input_height: number) {
        this.height += input_height;
    }
    ChangeSizeBy(input_width: number, input_height: number) {
        this.width += input_width;
        this.height += input_height;
    }
}
namespace Size {
    export let width: number;
    export let height: number;
    function SetWidth(input_width: number) {
        width = input_width;
    }
    function SetHeight(input_height: number) {
        height = input_height;
    }
    function SetSize(input_width: number, input_height: number) {
        width = input_width;
        height = input_height;
    }
    function GetWidth() {
        return width;
    }
    function GetHeight() {
        return height;
    }
    function GetSize(): number[] {
        return [width, height];
    }
    function ChangeWidthBy(input_width: number) {
        width += input_width;
    }
    function ChangeHeightBy(input_height: number) {
        height += input_height;
    }
    function ChangeSizeBy(input_width: number, input_height: number) {
        width += input_width;
        height += input_height;
    }
}


class Debug {
    public static Log(message: string) {
        console.log(message);
    }
    public static LogWarning(message: string) {
        console.warn(message);
    }
    public static LogError(message: string) {
        console.error(message);
    }
}
Debug.Log
const TextureMap = new Map().;
