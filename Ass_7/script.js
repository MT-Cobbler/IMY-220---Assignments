class MatrixRow extends React.Component{

     constructor(props){
          super(props);
     }
     render(){
          let numCols = this.props.cols;
          let columns = [];
          for(let i = 0 ; i < numCols; i++){
               columns.push(<input type="text" key={i}/>)
          }
          return(
               columns
          );
     }
}

class Matrix extends React.Component {
     // constructor(props){
     //      super(props);
     // }
     // render(){
     //      let numRows = this.props.rows;
     //
     //      let rows = [];
     //      for(let i = 0 ; i < numRows; i++){
     //           rows.push(<input type="text" key={i}/>)
     //      }
     //      return(
     //           rows
     //           // <Matrix cols={this.props}/>
     //      )
     // }

     static defaultProps = {
          rows: 2,
          cols:2
     }
     constructor(props){
          super(props);
     }
     render(){
          let numRows = this.props.rows;
          let rows = [];
          let breakKey = numRows*2;
          for(let i = 0; i < numRows; i++){
               rows.push(<React.Fragment key={i}><MatrixRow cols={this.props.cols} /><br/></React.Fragment>)
          }

          return(
               rows
          );
     }
}
class MaxSizeForm extends React.Component {

     constructor(props){
          super(props);
          this._width = React.createRef();
          this._height = React.createRef();
          this.state = {
               width: 2,
               height: 2
          }
     }
     handleChangeW = (width) => {
          this.setState({
               width: width.target.value,
          })
     }
     handleChangeH = (height) => {
          this.setState({
               height: height.target.value,
          })
     }
     render() {
          return (
          <div className = "row" >
          <div></div>
               <div className="col-12">
                    <label> Width </label>
                    <br/>
                    <input type="range" min="1" max="6" name="width" value={this.state.width} onChange={this.handleChangeW}/>
                    <br/>
                    <label> Height </label> <br/>
                    <input type="range" min="1" max="10" name="height" value={this.state.height} onChange={this.handleChangeH}/>

               </div>

               <div className="col-12">
                    <Matrix rows={this.state.height} cols={this.state.width}/>
               </div>
          </div>

        )
   }

}
ReactDOM.render(
     <MaxSizeForm/> ,
     //document.getElementsByTagName("DIV")[0]
     document.getElementsByClassName("react-container")[0]
     //document.getElementById("root")
);
