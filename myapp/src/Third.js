import React from 'react'

function Third(props)
{
  return (
    <div>
        <div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{props.content}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">{props.packages}</a>
  </div>
</div>
    </div>
  )
}

export default Third
