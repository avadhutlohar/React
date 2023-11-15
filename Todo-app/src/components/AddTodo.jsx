function AddTodo(){
return(
    <div className="container ">
    <div className="row">
      <div className="col-5">
        <input type="Enter Todo here" />
      </div>
      <div className="col-5">
        <input type="date" />
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success">Add</button>
      </div>


    </div>
  </div>
)

}

export default AddTodo;