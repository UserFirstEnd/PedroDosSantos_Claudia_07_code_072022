'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">social-network documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-83cabcee14438166cc0798fac40a3b9a792d7c13beeeddb101c0f83a2c4055838cc2fd1830fab202c69b1bc53867af5ecfae7a2f74aa39e479d8b58a0d79f4de"' : 'data-target="#xs-components-links-module-AdminModule-83cabcee14438166cc0798fac40a3b9a792d7c13beeeddb101c0f83a2c4055838cc2fd1830fab202c69b1bc53867af5ecfae7a2f74aa39e479d8b58a0d79f4de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-83cabcee14438166cc0798fac40a3b9a792d7c13beeeddb101c0f83a2c4055838cc2fd1830fab202c69b1bc53867af5ecfae7a2f74aa39e479d8b58a0d79f4de"' :
                                            'id="xs-components-links-module-AdminModule-83cabcee14438166cc0798fac40a3b9a792d7c13beeeddb101c0f83a2c4055838cc2fd1830fab202c69b1bc53867af5ecfae7a2f74aa39e479d8b58a0d79f4de"' }>
                                            <li class="link">
                                                <a href="components/AdminHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-65c0edd3fb060047db1a8ce63d02663361fde99e4a101d1c324fb9fcbc7223800e5c09f4b51747148cd51f612353904b3731487e478dc8c04c048ef001fef59e"' : 'data-target="#xs-components-links-module-AppModule-65c0edd3fb060047db1a8ce63d02663361fde99e4a101d1c324fb9fcbc7223800e5c09f4b51747148cd51f612353904b3731487e478dc8c04c048ef001fef59e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-65c0edd3fb060047db1a8ce63d02663361fde99e4a101d1c324fb9fcbc7223800e5c09f4b51747148cd51f612353904b3731487e478dc8c04c048ef001fef59e"' :
                                            'id="xs-components-links-module-AppModule-65c0edd3fb060047db1a8ce63d02663361fde99e4a101d1c324fb9fcbc7223800e5c09f4b51747148cd51f612353904b3731487e478dc8c04c048ef001fef59e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-9d6ee03f8845581a01d32c5d72b96bfab66d2c45917141aa7b5fbc40bf16697e013c47af00e78039a6ca6a9666bf71809213330c91a4f09f1ade6fef73951e2c"' : 'data-target="#xs-components-links-module-AuthModule-9d6ee03f8845581a01d32c5d72b96bfab66d2c45917141aa7b5fbc40bf16697e013c47af00e78039a6ca6a9666bf71809213330c91a4f09f1ade6fef73951e2c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-9d6ee03f8845581a01d32c5d72b96bfab66d2c45917141aa7b5fbc40bf16697e013c47af00e78039a6ca6a9666bf71809213330c91a4f09f1ade6fef73951e2c"' :
                                            'id="xs-components-links-module-AuthModule-9d6ee03f8845581a01d32c5d72b96bfab66d2c45917141aa7b5fbc40bf16697e013c47af00e78039a6ca6a9666bf71809213330c91a4f09f1ade6fef73951e2c"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-9d6ee03f8845581a01d32c5d72b96bfab66d2c45917141aa7b5fbc40bf16697e013c47af00e78039a6ca6a9666bf71809213330c91a4f09f1ade6fef73951e2c"' : 'data-target="#xs-injectables-links-module-AuthModule-9d6ee03f8845581a01d32c5d72b96bfab66d2c45917141aa7b5fbc40bf16697e013c47af00e78039a6ca6a9666bf71809213330c91a4f09f1ade6fef73951e2c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-9d6ee03f8845581a01d32c5d72b96bfab66d2c45917141aa7b5fbc40bf16697e013c47af00e78039a6ca6a9666bf71809213330c91a4f09f1ade6fef73951e2c"' :
                                        'id="xs-injectables-links-module-AuthModule-9d6ee03f8845581a01d32c5d72b96bfab66d2c45917141aa7b5fbc40bf16697e013c47af00e78039a6ca6a9666bf71809213330c91a4f09f1ade6fef73951e2c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthServiceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthServiceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PostModule-49af086503f4845f171678d934d7407cde6e13aa8d86a6afdbbe35e94acdc6f816b3828c4b82c0007f3811b70b86361b2aed21df7d32f5c8d4b6b673e004e552"' : 'data-target="#xs-components-links-module-PostModule-49af086503f4845f171678d934d7407cde6e13aa8d86a6afdbbe35e94acdc6f816b3828c4b82c0007f3811b70b86361b2aed21df7d32f5c8d4b6b673e004e552"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PostModule-49af086503f4845f171678d934d7407cde6e13aa8d86a6afdbbe35e94acdc6f816b3828c4b82c0007f3811b70b86361b2aed21df7d32f5c8d4b6b673e004e552"' :
                                            'id="xs-components-links-module-PostModule-49af086503f4845f171678d934d7407cde6e13aa8d86a6afdbbe35e94acdc6f816b3828c4b82c0007f3811b70b86361b2aed21df7d32f5c8d4b6b673e004e552"' }>
                                            <li class="link">
                                                <a href="components/DeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostRoutingModule.html" data-type="entity-link" >PostRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-3c81a137b871856133c9b7c3199efcace373c88321ae05dca4a285d5f8f3fdac4bedd2c4967dd6f4e54a83b50b5fc75e93388f21342425b118e409631e7044dc"' : 'data-target="#xs-components-links-module-PublicModule-3c81a137b871856133c9b7c3199efcace373c88321ae05dca4a285d5f8f3fdac4bedd2c4967dd6f4e54a83b50b5fc75e93388f21342425b118e409631e7044dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-3c81a137b871856133c9b7c3199efcace373c88321ae05dca4a285d5f8f3fdac4bedd2c4967dd6f4e54a83b50b5fc75e93388f21342425b118e409631e7044dc"' :
                                            'id="xs-components-links-module-PublicModule-3c81a137b871856133c9b7c3199efcace373c88321ae05dca4a285d5f8f3fdac4bedd2c4967dd6f4e54a83b50b5fc75e93388f21342425b118e409631e7044dc"' }>
                                            <li class="link">
                                                <a href="components/CreatePostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModuleModule.html" data-type="entity-link" >SharedModuleModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HomeComponent-1.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthServiceService.html" data-type="entity-link" >AuthServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/dataLogin.html" data-type="entity-link" >dataLogin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/token.html" data-type="entity-link" >token</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});