import React from 'react';

class NavBar extends React.Component
{
    render(){
        const { navBarConfig="navbar navbar-expand-lg navbar-dark",
                navBarBrand="NoBrand",
                navBarLink_1="https://github.com/adrianoenrico/Tindog",
                navBarLink_2="https://github.com/adrianoenrico/Tindog",
                navBarLink_3="https://github.com/adrianoenrico/Tindog",
                navBarBrand_1="#1",
                navBarBrand_2="#2",
                navBarBrand_3="#3"} = this.props;
        return(
            <nav className={navBarConfig}>
                <a className="navbar-brand" href="https://github.com/adrianoenrico/Tindog">{navBarBrand}</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href={navBarLink_1}>{navBarBrand_1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={navBarLink_2}>{navBarBrand_2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={navBarLink_3}>{navBarBrand_3}</a>
                        </li>
                        {/* And so on */}
                    </ul>
                </div>
            </nav>
        );
    }
}   

export default NavBar;
