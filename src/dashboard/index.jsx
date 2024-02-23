import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';


import { ChangeTitle } from '../../utils/common';

const Page = () => {
    const [ numOfEmp, setnumOfEmp ] = useState(0);
    const [ no_of_rewarded, setno_of_rewarded ] = useState(0);
    const [ total_package, set_package] = useState(0);
    const [totalSales, setSales] = useState(0);

    let {id} = useParams();

    useEffect(() => {
        ChangeTitle('Incentive Management System');
        
    }, []);


  return (
    <>
        <div className="grid-container" href="css/styles.css">

            {/* <!-- Header --> */}
            <header className="header">
                <div className="menu-icon" onClick="openSidebar()">
                    <span className="material-icons-outlined">menu</span>
                </div>
                <div className="header-right">
                    <h1>INCENTIVE MANAGEMENT SYSTEM</h1>
                </div>
            </header>
            {/* <!-- End Header --> */}
            
            {/* <!-- Sidebar --> */}
            <aside id="sidebar">
                <div className="sidebar-title">
                    <div className="sidebar-brand">
                        <span className="material-icons-outlined">inventory</span> IncentiPro
                    </div>
                    <span className="material-icons-outlined" onClick="closeSidebar()">close</span>
                </div>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <a href="#" target="_blank">
                            <span className="material-icons-outlined">dashboard</span> Dashboard
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#" target="_blank">
                            <span className="material-icons-outlined">person</span> Employees
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#" target="_blank">
                            <span className="material-icons-outlined">fact_check</span> Incentive Calc
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#" target="_blank">
                            <span className="material-icons-outlined">redeem</span> Package
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#" target="_blank">
                            <span className="material-icons-outlined">notifications</span> Notify
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#" target="_blank">
                            <span className="material-icons-outlined">poll</span> Reports
                        </a>
                    </li>

                </ul>
            </aside>
            {/* <!-- End Sidebar --> */}

            {/* v */}
            <main className="main-container">
                <div className="main-title">
                    <p className="font-weight-bold">DASHBOARD</p>
                </div>
                <div className="main-cards">

                    <div className="card">
                        <div className="card-inner">
                            <p className="text-primary">EMPLOYEE</p>
                            <span className="material-icons-outlined text-blue">person</span>
                        </div>
                        <span className="text-primary font-weight-bold">{numOfEmp}</span>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <p className="text-primary">HOLIDAY PACKAGE</p>
                            <span className="material-icons-outlined text-orange">redeem</span>
                        </div>
                        <span className="text-primary font-weight-bold">{total_package}</span>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <p className="text-primary">TOTAL SALES</p>
                            <span className="material-icons-outlined text-green">trending_up</span>
                        </div>
                        <span className="text-primary font-weight-bold">{totalSales}</span>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <p className="text-primary">REWARDED EMPLOYEE</p>
                            <span className="material-icons-outlined text-red">stars</span>
                        </div>
                        <span className="text-primary font-weight-bold">{no_of_rewarded}</span>
                    </div>
                </div>    

               <div className="charts">

                    <div className="charts-card">
                        <p className="chart-title">Sales of Each Employee</p>
                        <div id="bar-chart"></div>
                    </div>

                    <div className="charts-card">
                        <p className="chart-title">Package Vs Employee</p>
                        <div id="pie-chart"></div>
                    </div>

               </div>
            </main>
            {/* End Main */}
        </div>

        {/* Scripts */}
        {/* ApexCharts */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.35.3/apexcharts.min.js"></script>
        {/* Custom JS */}
        <script src="js/script.js"></script>
    </>
  )
}

export default Page
