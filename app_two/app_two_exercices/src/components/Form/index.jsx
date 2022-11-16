import React, { useState } from "react";
import FormInput from "components/FormInput";

// Créer un formulaire où tout ce que l'utilisateur rentre dans la barre de recherche est visible en minuscule, même s'il l'entre en majuscule.
const Form = () => {

  

  return(
  <div className="container">
  <main>
    
    <div className="row g-5">

      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">First name</label>
              
              <FormInput />
              
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required></input>
            </div>
          </div>
          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>
  </main>
  </div>
  )

};

export default Form;