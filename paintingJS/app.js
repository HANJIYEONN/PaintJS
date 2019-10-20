const canvas        = document.getElementById("jsCanvas");
const ctx           = canvas.getContext("2d");                         //canvas 안에 context는 2d안에 픽셀들을 컨트롤함
const colors        = document.getElementsByClassName("jsColor");      //canvas 붓 색상 변경을 위함
const range         = document.getElementById("jsRange");
const mode          = document.getElementById("jsMode");
const saveBtn       = document.getElementById("jsSave"); 

const INNER_COLOR   = "#2c2c2c";
const CANVAS_SIZE   = 700;

canvas.width        = CANVAS_SIZE;                      //width 를 wight 로 써서 오류남. 캔버스 크기를 높이만 인식이 되어서 가로는 임의로 인식되었나봄.
canvas.height       = CANVAS_SIZE;

ctx.fillStyle       = "white";
ctx.fillRect        (0, 0, canvas.width, canvas.height)
ctx.strokeStyle     = INNER_COLOR;             //붓 처음 색 지정
ctx.fillStyle       = INNER_COLOR;
ctx.lineWidth       = "2.5";                   //붓 크기 조절       

let painting        = false;
let filling         = false;

function startPainting () {
    painting = true;
}

function stopPainting () {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
      ctx.beginPath();  //Path는 선, path를 만들면 마우스의 x,y 좌표로 path를 옮김
      ctx.moveTo(x, y);
    } else {
        //선을 만듬
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }

  
/*
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y);
    //캔버스 창(offset) 위에서 마우스 좌표인식
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
*/
function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    }else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick() {
    if (filling) {
    ctx.fillRect(0, 0, canvas.height, canvas.width);        //캔버스 채우기
    }
}

function handleleCM (event) {
    event.preventDefault();
}

function handleSaveClick () {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "myCanvas";
    link.click();
}


if (canvas) {
    canvas.addEventListener("mousemove",    onMouseMove);
    canvas.addEventListener("mousedown",    startPainting);
    canvas.addEventListener("mouseup",      stopPainting);
    canvas.addEventListener("mouseleave",   stopPainting);
    canvas.addEventListener("click",        handleCanvasClick);
    canvas.addEventListener("contextmenu",  handleleCM);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range) {
    range.addEventListener("input", handleRangeChange);
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}