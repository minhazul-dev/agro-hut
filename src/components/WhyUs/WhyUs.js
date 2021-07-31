import React from 'react';
import "./WhyUs.css"
const WhyUs = () => {
    return (
        <div class="page">
            <div class="page__works-section py-4 ">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="page__title  mb-4">
                                Why choose us?
                            </h2>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-4 page__works-section__wrapper">
                            <div class="page__works-section__card">
                                <div class="page__works-section__card__circle">
                                    <div class="page__works-section__card__circle__inside">
                                        <div class="page__works-section__card__circle__inside__icon">
                                            <i class="fas fa-search page__works-section__card__circle__inside__icon--fontawesome"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="page__works-section__card__title">
                                    Lorem ipsum dolor sit.
                                </p>
                                <p class="page__works-section__card__description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, illum?
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 page__works-section__wrapper">
                            <div class="page__works-section__card">
                                <div class="page__works-section__card__circle">
                                    <div class="page__works-section__card__circle__inside">
                                        <div class="page__works-section__card__circle__inside__icon">
                                            <i class="fas fa-shopping-cart page__works-section__card__circle__inside__icon--fontawesome"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="page__works-section__card__title">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                                <p class="page__works-section__card__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, saepe.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 page__works-section__wrapper">
                            <div class="page__works-section__card">
                                <div class="page__works-section__card__circle">
                                    <div class="page__works-section__card__circle__inside">
                                        <div class="page__works-section__card__circle__inside__icon">
                                            <i class="fas fa-hand-holding-usd page__works-section__card__circle__inside__icon--fontawesome"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="page__works-section__card__title">
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </p>
                                <p class="page__works-section__card__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet ad doloribus distinctio iste molestias?
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div class="row page__works-section__wrapper justify-content-center">
                        <div class="col-12 layout-center">
                            <div class="button">
                                <a href="#"> Quero cashback de verdade </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default WhyUs;