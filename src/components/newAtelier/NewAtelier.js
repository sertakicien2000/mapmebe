
import React from 'react';
import './new.css'

class NewAtelier extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titre: '',
      utilisateur:'',
      prix: '',
      debut: '',
      duree: '',
      place: '',
      placeRes: '',
      description: '',
      image: '',
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
}

onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
handleUploadImage(ev) {
  ev.preventDefault();

  const data = new FormData();
  data.append('image', this.uploadInput.files[0]);
  data.append('titre', this.state.titre);
  data.append('prix', this.state.prix);
  data.append('debut', this.state.debut);
  data.append('duree', this.state.duree);
  data.append('placeRes', 0);
  data.append('place', this.state.place);
  data.append('idUser', localStorage.id);
  data.append('description', this.state.description)

  fetch('http://localhost:8080/api/users/newArticle/', {
    method: 'POST',
    body: data,
  }).then((response) => {
    response.json().then((body) => {
      this.setState({ image: `http://localhost:8080/api/users/newArticle/${body.image}` });
      console.log('ity ilay body.image', body.image);

    });
  });
}


  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleUploadImage} className="md-form">
          <div className="form-group mx-sm-3 mb-2" id="ajoutatelier">
            <div className="row" >
              <div className="col-md-6">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="titre" placeholder="Titre" />

              </div>
              <div className="col-md-6">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="prix" placeholder="Prix" />
                
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-6">
              <input className="form-control" type="time"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="debut" placeholder="Debut" />
              </div>

              <div className="col-md-6">

                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="description" placeholder="Description" /><br/>

              </div>
            </div>
           
            <br />
            <div className="row">
              <div className="col-md-6">
              <input className="form-control" type="number"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="place" placeholder="Nombre des places" />
              </div>
              <div className="col-md-6">
                <input className="form-control" type="time"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="duree" placeholder="Durée" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
              <input className="form-control" type="date"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="date" placeholder="Date" />
              </div>
              <div className="col-md-6">
                
              </div>
            </div>
            <br />
        
            <div className="row">
            <input ref={(ref) => { this.uploadInput = ref; }} id="fichier" type="file" name="image" />
                <button id="validate" className="btn btn-info">Publier</button>
             
              
            </div>
            
            
          </div>

        </form>
      </div>

    );
  }
}

export default NewAtelier;
