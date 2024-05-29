import hamburgerMenu from "./components/hamburger";
import dropdownMenu from "./components/dropdown-menu";
import dropdownInnerMenu from "./components/dropdown-inner-menu";
import fixedHeader from "./components/fixed-header";
import ticker from "./components/ticker";
import faq from "./components/faq";
import tabs from "./components/tabs";
//import sidebarList from "./components/sidebar-list";
import dropdownFooter from "./components/dropdown-footer";
import fixedSidebar from "./components/fixed-sidebar";
import activeLink from "./components/active-link";
import {customSelect, setDefaultValues} from "./components/custom-select";

document.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu();
    dropdownMenu();
    dropdownInnerMenu();
    fixedHeader();
    dropdownFooter();
    activeLink();

    if (document.body.classList.contains('is-home-page') || document.body.classList.contains('is-seo-page')) {
        tabs('.inclusive__link', '.inclusive__content', '.inclusive__list');
       // sidebarList();
        faq('.faq__wrapper', '.faq__question', '.faq__answer');
        faq('.work__item', '.work__title', '.work__answer');
        ticker();
        setDefaultValues(); 
        customSelect();

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                ticker();
            }
        });
    }

    if (document.body.classList.contains('is-about-page')) {
        tabs('.js-tab-link', '.js-tab-content', '.js-tab-list');
    }

    if (document.body.classList.contains('is-service-page')) {
        tabs('.service-tab__link', '.service-tab__content', '.service-tab__list');
    }

    if (document.body.classList.contains('is-price-page')) {
        ticker();
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                ticker();
            }
        });
        tabs('.js-tab-link', '.js-tab-content', '.js-tab-list');
        faq('.faq__wrapper', '.faq__question', '.faq__answer');
        setDefaultValues(); 
        customSelect();
    }

    if (document.body.classList.contains('is-review-page')) {
        fixedSidebar();
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1280) {
                fixedSidebar();
            }
        });
        tabs('.js-tab-link', '.js-tab-content', '.js-tab-list');
    }

    if (document.body.classList.contains('is-seo-page')) {
        tabs('.service-tab__link', '.service-tab__content', '.service-tab__list');
    }

    if (document.body.classList.contains('is-article-page')) {
        tabs('.js-tab-link', '.js-tab-content', '.js-tab-list');
        faq('.faq__wrapper', '.faq__question', '.faq__answer');
    }
});
