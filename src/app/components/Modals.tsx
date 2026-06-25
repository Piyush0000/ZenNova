/* eslint-disable */
import React from 'react';

export default function Modals() {
  return (
    <>
      




    
    
    
    
    
    
    
    
    <div className="modal fade tp-product-modal" id="product-quick-view-modal" tabIndex={-1} aria-labelledby="product-quick-view-modal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered justify-content-center">
            <div className="modal-content"></div>
        </div>
    </div>
    <div data-bb-toggle="quick-shop-modal" className="modal fade" id="quick-shop-modal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="modal-body"></div>
            </div>
        </div>
    </div>
    
    
    
    
    
    
    
    





    

    
    
    
    <div className="js-cookie-consent cookie-consent cookie-consent-full-width" style={{"backgroundColor":"#000","color":"#fff"} as React.CSSProperties} dir="ltr">
        <div className="cookie-consent-body" style={{"maxWidth":"1170px"} as React.CSSProperties}>
            <div className="cookie-consent__inner">
                <div className="cookie-consent__message">
                    Your experience on this site will be improved by allowing cookies
                    <a href="/cookie-policy">Cookie Policy</a>
                </div>

                <div className="cookie-consent__actions">
                    <button className="js-cookie-consent-agree cookie-consent__agree" style={{"backgroundColor":"#000","color":"#fff","border":"1px solid #fff"} as React.CSSProperties}>
                    Accept cookies
                </button>
                </div>
            </div>

            <div className="cookie-consent__categories">
                <div className="cookie-category">
                    <label className="cookie-category__label">
                            <input type="checkbox"
                                name="cookie_category[]"
                                value="essential"
                                className="js-cookie-category" defaultChecked={true} disabled={true}                              />
                            <span className="cookie-category__name">Essential</span>
                        </label>
                    <p className="cookie-category__description">These cookies are essential for the website to function properly.</p>
                </div>
                <div className="cookie-category">
                    <label className="cookie-category__label">
                            <input type="checkbox"
                                name="cookie_category[]"
                                value="analytics"
                                className="js-cookie-category"
                                                             />
                            <span className="cookie-category__name">Analytics</span>
                        </label>
                    <p className="cookie-category__description">These cookies help us understand how visitors interact with the website.</p>
                </div>
                <div className="cookie-category">
                    <label className="cookie-category__label">
                            <input type="checkbox"
                                name="cookie_category[]"
                                value="marketing"
                                className="js-cookie-category"
                                                             />
                            <span className="cookie-category__name">Marketing</span>
                        </label>
                    <p className="cookie-category__description">These cookies are used to deliver personalized advertisements.</p>
                </div>

                <div className="cookie-consent__save">
                    <button className="js-cookie-consent-save cookie-consent__save-button" style={{"backgroundColor":"#000","color":"#fff","border":"1px solid #fff"} as React.CSSProperties}>
                        Save preferences
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div data-site-cookie-name="cookie_for_consent"></div>
    <div data-site-cookie-lifetime="7300"></div>
    <div data-site-cookie-domain="aliceblue-nightingale-833852.hostingersite.com"></div>
    <div data-site-session-secure=""></div>

    
    <div className="js-sale-popup-container hidden" data-include="/ajax/sale-popup/products" data-show-on-mobile="true"></div>



    </>
  );
}