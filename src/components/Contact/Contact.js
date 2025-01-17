import React from 'react'
import Heading from '../Reusable/Heading'

export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/grandmasterrockks@gmail.com" method="POST">
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="your Name" className="form-control" />
                        <input type="email" name="email" id="email" placeholder="your Email" className="form-control" />
                        <input type="text" name="mobile" id="mobile" placeholder="your Mobile" className="form-control" />
                        <input type="textarea" name="description" id="description" placeholder="your Message" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>

            </div>
        </section>
    )
}
