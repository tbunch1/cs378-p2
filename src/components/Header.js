import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Header()  {

    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <img src="images/logo.jpg" alt="Text saying Bevo's Bistro and a picture of Bevo eating a cheeseburger."/>
                </div>
                </div>


                <div class="container">
                <div class="row">
                    <p class="fancy-slogan text-center">
                    Diverse, tasty, and student-focused.
                    </p>
                    <p class="text-center">
                    Serving you since 2025
                    </p>
                </div>
            </div>
        </div>
    );
}