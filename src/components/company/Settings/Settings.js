import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../layouts/Button';

const Settings = () =>{
    return(
        <>

            <div className="container py-5">
                <style>
                    {
                        `
                        .dashboard-body-wrapper, .page-holder{
                            background: #e9ecef;
                        }
                        `
                    }
                </style>
                <div className="main-body">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div  className="row">
                                    {/* ADD NEW DEPARTMENT BUTTON */}
                                    <div className="col">
                                        <Link to="/dashboard/company/profile/edit/">
                                            <Button to="/" 
                                                className="btn btn-sm "
                                                label="Add New Department"
                                                />
                                        </Link>
                                    </div>

                                    {/* VIEW COMPANY PROFILE BUTTON */}
                                    <div className="col">
                                        <Link to="/dashboard/company/profile/edit/">
                                            <Button to="/" 
                                                className="btn btn-sm "
                                                label="View Company Profile"
                                                />
                                        </Link>
                                    </div>
                                    {/* UPDATE COMPANY PROFILE BUTTON */}
                                    <div className="col">
                                        <Link to="/dashboard/company/profile/edit/">
                                            <Button to="/" 
                                                className="btn btn-sm "
                                                label="Update Company Profile"
                                                />
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>    
    )
}


export default Settings;