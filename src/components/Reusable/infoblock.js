import React from 'react'
import Heading from "./Heading"
import { Link } from "gatsby"

export default function infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
          <div className="container">
             < Heading title={heading} />
             <div className="col-10 col-sm-8 mx-auto text-center">
                 <p className="lead text-white mb-4">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, 
                 officia necessitatibus vero iure nisi, dolorum consequuntur tempora pariatur 
                 mollitia quasi hic optio suscipit dicta quam quo dolores harum fugiat blanditiis?
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, 
                 officia necessitatibus vero iure nisi, dolorum consequuntur tempora pariatur 
                 mollitia quasi hic optio suscipit dicta quam quo dolores harum fugiat
                 </p>
                 <Link to="/about/">
                     <button className="btn btn-warning btn-lg">
                         {heading}
                     </button>
                    </Link>
             </div>
            </div>  
        </section>
    )
}
