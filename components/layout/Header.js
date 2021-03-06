import { format } from 'date-fns'
import Link from 'next/link'

//COMPONENTS
import NextSeo from 'next-seo';
import Navbar from '../navigation/Navbar'
import Sub_navbar from '../navigation/Sub_navbar'

import { hamburgerMenu } from '../helpers/ClickListeners'

export default ({ seoTitle, description, pageTitle, categories, date }) => {

    let hasPageTitle = pageTitle ? <h2>{pageTitle}</h2> : null

    return (

        <div>
            <NextSeo
                config={{
                    title: date ? seoTitle + ' | ' + categories + ' | ChrisBemister.com' : seoTitle,
                    description: date ? seoTitle + ' | posted in ' + categories + ' on ' + format(date, 'DD. MMMM, YYYY') : description
                }}
            />

            <div className="full-menu">

                <div className="nav js-nav nav-active">
                    <div className="nav-content">
                        <div className="js-nav-header nav-header">
                            <span className="nav-header-text">Chris Bemister</span>
                            <div className="nav-header-line js-nav-header-line"></div>
                        </div>

                        <Navbar />

                        <Sub_navbar />

                    </div>


                </div>

            </div>

            <a href="#" onClick={hamburgerMenu} className="menu menu-toggle">
                <span className="menu-icon-line-1 menu-icon-line"></span>
                <span className="menu-icon-line-2 menu-icon-line"></span>
                <span className="menu-icon-line-3 menu-icon-line"></span>
            </a>

            <h1 className="site-name">

                <Link prefetch href="/">
                    <a className="site-name-link">Chris Bemister</a>
                </Link>

            </h1>




            {/* {hasPageTitle} */}


        </div>

    );

}
