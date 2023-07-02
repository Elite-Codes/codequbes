import React from "react";
import './css/Navbar.css'

export default function Navbar() {
    return(
        <header>
        {/* <nav>
            <div className="nav--logo"> <img src="./codeqube_logo.svg" alt="" /> </div>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services <span className="dropper"><img src="./services drop.svg" alt="" /></span></a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
        </nav> */}
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid ">
    <a class="navbar-brand  flex-grow-1 ms-4" href="#"><img src="./codeqube_logo.svg" alt="" /></a> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <a class="nav-link mx-3 fs-3" aria-current="page" href="#">About us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mx-3 fs-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Web design</a></li>
            <li><a class="dropdown-item" href="#">App dvelopement</a></li>
            <li><a class="dropdown-item" href="#">ERP</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-3 fs-3" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link mx-3 fs-3 ">Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </header>
    )
}
