type Position_x = number;
type Position_y = number;
type Position = [Position_x, Position_y];
class Player {
    public postion_x: Position_x;
    public postion_y: Position_y;
    public size_x: number;
    public size_y: number;
    public rotation_x: number;
    public rotation_y: number;
    public IgnoreCollision: boolean;
    public IsVisible: boolean;
    public IsOnGround: boolean; // Is the player on the ground?
    public IsJumping: boolean; // Is the 
}
namespace Postion {
    export let x: number;
    export let y: number;
    function SetX(input_x: number) {
        x = input_x;
    }
    function SetY(input_y: number) {
        y = input_y;
    }
    function SetPosition(input_x: number, input_y: number) {
        x = input_x;
        y = input_y;
    }
    function GetX() {
        return x;
    }
    function GetY() {
        return y;
    }
    function GetPosition(): number[] {
        return [x, y];
    }
    function ChangeXBy(input_x: number) {
        x += input_x;
    }
    function ChangeYBy(input_y: number) {
        y += input_y;
    }
    function ChangePositionBy(input_x: number, input_y: number) {
        x += input_x;
        y += input_y;
    } 
    //rotaiton
    export let r_x: number;
    export let r_y: number;
    function SetRotationX(input_x: number) {
        r_x = input_x;
    }
    function SetRotationY(input_y: number) {
        r_y = input_y;
    }
    function SetRotation(input_x: number, input_y: number) {
        r_x = input_x;
        r_y = input_y;
    }


  


    function GetRotation(): number[] {
        return [r_x, r_y];
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
namespace Size {
    let size_width: number;
    let size_height: number;
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
