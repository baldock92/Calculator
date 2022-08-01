import Display from "./Display";

function Buttons({
  showNum,
  result,
  clearAll,
  deleteNum,
  mathsFunc,
  squareNum,
  flipPositive,
  decimal,
  equalsFunc,
}) {
  return (
    <div className="calc">
      <Display result={result} />
      <div className="div2">
        <button
          className="calcButton"
          onClick={() => {
            clearAll();
          }}
        >
          A/C
        </button>
      </div>

      <div className="div5">
        <button
          className="calcButton"
          onClick={() => {
            mathsFunc("/");
          }}
        >
          /
        </button>
      </div>
      <div className="div6">
        <button
          className="calcButton"
          onClick={() => {
            mathsFunc("x");
          }}
        >
          x
        </button>
      </div>
      <div className="div7">
        <button
          className="calcButton"
          onClick={() => {
            mathsFunc("-");
          }}
        >
          -
        </button>
      </div>
      <div className="div8">
        <button
          className="calcButton"
          onClick={() => {
            mathsFunc("+");
          }}
        >
          +
        </button>
      </div>
      <div className="div9">
        <button
          className="calcButton"
          onClick={() => {
            equalsFunc();
          }}
        >
          =
        </button>
      </div>
      <div className="div10">
        <button
          className="calcButton"
          onClick={() => {
            deleteNum();
          }}
        >
          Del
        </button>
      </div>
      <div className="div11">
        <button
          className="calcButton"
          onClick={() => {
            decimal(".");
          }}
        >
          .
        </button>
      </div>
      <div className="div12">
        <button
          className="calcButton"
          onClick={() => {
            showNum(0);
          }}
        >
          0
        </button>
      </div>
      <div className="div13">
        <button
          className="calcButton"
          onClick={() => {
            showNum(1);
          }}
        >
          1
        </button>
      </div>
      <div className="div14">
        <button
          className="calcButton"
          onClick={() => {
            showNum(2);
          }}
        >
          2
        </button>
      </div>
      <div className="div15">
        <button
          className="calcButton"
          onClick={() => {
            showNum(3);
          }}
        >
          3
        </button>
      </div>
      <div className="div16">
        <button
          className="calcButton"
          onClick={() => {
            showNum(4);
          }}
        >
          4
        </button>
      </div>
      <div className="div17">
        <button
          className="calcButton"
          onClick={() => {
            showNum(5);
          }}
        >
          5
        </button>
      </div>
      <div className="div18">
        <button
          className="calcButton"
          onClick={() => {
            showNum(6);
          }}
        >
          6
        </button>
      </div>
      <div className="div19">
        <button
          className="calcButton"
          onClick={() => {
            showNum(7);
          }}
        >
          7
        </button>
      </div>
      <div className="div20">
        <button
          className="calcButton"
          onClick={() => {
            showNum(8);
          }}
        >
          8
        </button>
      </div>
      <div className="div21">
        <button
          className="calcButton"
          onClick={() => {
            showNum(9);
          }}
        >
          9
        </button>
      </div>
      <div className="div4">
        <button
          className="calcButton"
          onClick={() => {
            flipPositive();
          }}
        >
          +-
        </button>
      </div>
      <div className="div3">
        <button
          className="calcButton"
          onClick={() => {
            squareNum();
          }}
        >
          x²
        </button>
      </div>
      {/* <div className="div24"><button className="calcButton">extra</button></div> */}
    </div>
  );
}

export default Buttons;
