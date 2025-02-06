import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ item }) => {
    let imgdir = "images/".concat(item.imageName);

    return (
        <div>
            <div class="container menu-item">
                <div class="row">
                    <div class="col-4">
                    <img src={imgdir} alt={item.description} 
                    class="img-fluid menu-img" />
                    </div>
                    <div class="col-8">
                    <div class="row">
                        <ul class="list-unstyled">
                        <li class="item-title">
                            {item.title}
                        </li>
                        <li class="item-desc">
                            {item.description}
                        </li>
                        </ul>
                    </div>
                    <div class="row justify-content-between align-items-bottom">
                        <div class="col-3">
                        {item.price}

                        </div>
                        <div class="col-3">
                        <button type="button" class="add-button">
                            Add
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
