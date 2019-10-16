<div className="App">


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App for notes</h1>
        </header>
        <br/>


        <div className="container">
         
         
          {this.state.displayAdd ?
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg" placeholder="New Note" aria-label="Note" aria-describedby="basic-addon2" value={this.state.value} onChange={this.handleChange}/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">Add Note</button>
                </div>
              </div>
            </form>
          : null }


          {this.state.displayUpdate ?
            <form onSubmit={this.handleUpdate}>
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg" placeholder="Update Note" aria-label="Note" aria-describedby="basic-addon2" value={this.state.value} onChange={this.handleChange}/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">Update Note</button>
                </div>
              </div>
            </form>
          : null }


        </div>


        
        <br/>
        <div className="container">
          {data}
        </div>
      </div>