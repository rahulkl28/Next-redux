"use client";

import Link from "next/link"
import { useEffect, useState } from "react";


const Navbar = () => {

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
      }, [])

  return (
    <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" href={'/'}>Form Submission</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href='/userdetails'>User Details</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href={'/'}>About </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar