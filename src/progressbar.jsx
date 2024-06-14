

const ProgressBar = ({progress,color}) => {

    const progressstyle={
      width : `${progress}%`,
      backgroundColor : color || 'green',
      height : "100%",
      borderRadius : 20,
  
    }
  
    return (
      <div className='container'>
          <h1>Progress Bar</h1>
          <div className="progress">
            <div className='progressbar' style={progressstyle}>
            </div>
            <span>{`${progress}`} %</span>
          </div>
          
          <div className="msg">
              {
                  progress <100 ? (<p>Loading ...</p>) : (<p>complete</p>)
              }
            </div>

          
      </div>
    )
  }

  export default ProgressBar;
  