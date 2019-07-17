import React from 'react'
import Heading from './Heading'


export default function DualInfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, 
                        officia necessitatibus vero iure nisi, dolorum consequuntur tempora pariatur 
                        mollitia quasi hic optio suscipit dicta quam quo dolores harum fugiat blanditiis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, 
                        officia necessitatibus vero iure nisi, dolorum consequuntur tempora pariatur 
                        mollitia quasi hic optio suscipit dicta quam quo dolores harum fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, delectus voluptas quisquam commodi, in dolore, incidunt consequatur suscipit 
                        fugit ut consequuntur corrupti earum fuga. Ipsum asperiores modi distinctio doloremque 
                        totam nulla nesciunt dolorum vel mollitia beatae aliquam numquam non blanditiis, 
                        perspiciatis praesentium magnam illo magni quas quam excepturi. Eius asperiores 
                        iste ipsam exercitationem qui deserunt nisi. Quia eius neque nesciunt, quibusdam 
                        voluptates adipisci, ipsum nisi quam, cum sed delectus magni unde aliquam hic 
                        inventore exercitationem. Maiores iste accusantium perferendis quam exercitationem 
                        doloribus quasi natus impedit quae, deleniti, quos totam? Libero totam quae hic dignissimos
                         modi explicabo quibusdam fugiat quis amet!
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="card bg-dark">
                            <img src="https://images.pexels.com/photos/2543042/pexels-photo-2543042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="image goes here" />
                            <div className="card-body">
                            <h5 className="card-title text-white">Just click Photos</h5>
                            <p className="card-text text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, 
                            officia necessitatibus vero iure nisi, dolorum consequuntur tempora pariatur .
                            </p>
                            <a href="a" className="btn btn-warning btn-block">Go Somewhre</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
