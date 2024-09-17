<!-- ========== App Menu ========== -->
<div class="app-menu navbar-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
        <!-- Dark Logo-->
        <a href="index.html" class="logo logo-dark">
            <span class="logo-sm">
               BT
            </span>
            <span class="logo-lg">
               Binbaz Travel
            </span>
        </a>
        <!-- Light Logo-->
        <a href="index.html" class="logo text-white logo-light">
            <span class="logo-sm">
                BT
             </span>
             <span class="logo-lg">
                Binbaz Travel
             </span>
        </a>
        <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover">
            <i class="ri-record-circle-line"></i>
        </button>
    </div>

    <div id="scrollbar">
        <div class="container-fluid">

            <div id="two-column-menu">
            </div>
            <ul class="navbar-nav" id="navbar-nav">
                <li class="menu-title"><span data-key="t-menu">Menu</span></li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('admin.dashboard.index')}}" >
                        <i class="ri-dashboard-line"></i> <span data-key="t-layouts">Dashboard</span> 
                    </a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('admin.packages.index')}}" >
                        <i class="ri-inbox-archive-line"></i> <span data-key="t-layouts">Packages</span> 
                    </a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('admin.hotels.index')}}" >
                        <i class="ri-building-line"></i> <span data-key="t-layouts">Hotels</span> 
                    </a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('admin.categories.index')}}" >
                        <i class="ri-price-tag-3-line"></i> <span data-key="t-layouts">Categories</span> 
                    </a>
                </li>
                

                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('admin.users.index')}}" >
                        <i class="ri-user-line"></i> <span data-key="t-layouts">Users</span> 
                    </a>
                </li>
                
                <li class="menu-title"><span data-key="t-reports">Reports</span></li>

                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('admin.bookings.index')}}" >
                        <i class="ri-apps-2-line"></i> <span data-key="t-layouts">Bookings</span> 
                    </a>
                </li>


            </ul>
        </div>
        <!-- Sidebar -->
    </div>

    <div class="sidebar-background"></div>
</div>
<!-- Left Sidebar End -->
