import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  id="fotera" className="font-small pt-4 mt-4 bg bg-dark">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">ATELIER CUISINE</h5>
            <p>
            Le plus grand réconfort de ma vieillesse, et qui m'apporte la plus grande satisfaction,
            <br/> c'est avec plaisir aussi pour la conception de l'atelier de cuisine pour l'aider de la cuisinier et l'interésser de cuisine.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">CONTACT</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Tél</a>: +261337496287
              </li>
             
              <li className="list-unstyled">
                <a href="#!">Adresse @mail</a>:rakotoarimananafabricien@gmail.com
              </li>
              <li className="list-unstyled">
                <a href="#!">Ville</a>:Antananarivo Atsimondrano
              </li>
              <li className="list-unstyled">
              <a href="#!">Tana :</a>102 Atsimondrano
            </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 ">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Fabricien Pierre Setraniaina RAKOTOARIMANANA
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;