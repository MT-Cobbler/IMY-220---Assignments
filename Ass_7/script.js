class MatrixRow extends React.Component{

     render(){
          return(
               <input type = "text" min = "1" max = "6" name = "width" id = "width" />
          );
     }
}

class Matrix extends React.Component {
     constructor(props){
          super(props);
          console.log(this.props.rows)
     }
     render(){
          return(
               <div>
               </div>
          )
     }


}
class MaxSizeForm extends React.Component {
     constructor(props){
          super(props);
          this._width = React.createRef();
          this._height = React.createRef();
          this.w = 2;
     }
     handleChange(width){

          w = width.target.value;

     }
     render() {
          return (
          <div className = "row" >
               <label> Width </label> <br/>
               <input type = "range" min = "1" max = "6" name = "width" id = "width" ref={this._width} onChange={this.handleChange}/>
               <br/>
               <label> Height </label>
               <br/>
               <input type = "range" min = "1" max = "10" name = "height" id = "height" ref={this._height}  onChange={this.handleChange}/>
               <br/>

               <Matrix rows={this.w}/>
          </div>

        )
   }

}
ReactDOM.render( <MaxSizeForm/> ,
    document.getElementById("root")
);
