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
                    <a href="index.html" data-type="index-link">api-libreria documentation</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-811b84f3ebf15151d8e78b7cc9e9abf384b70ca0212453f04caa06984e25cd186ef7b8f87fa51c195840d8c2cb165aab100de8ca45298f11622b64baae790988"' : 'data-target="#xs-controllers-links-module-AuthModule-811b84f3ebf15151d8e78b7cc9e9abf384b70ca0212453f04caa06984e25cd186ef7b8f87fa51c195840d8c2cb165aab100de8ca45298f11622b64baae790988"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-811b84f3ebf15151d8e78b7cc9e9abf384b70ca0212453f04caa06984e25cd186ef7b8f87fa51c195840d8c2cb165aab100de8ca45298f11622b64baae790988"' :
                                            'id="xs-controllers-links-module-AuthModule-811b84f3ebf15151d8e78b7cc9e9abf384b70ca0212453f04caa06984e25cd186ef7b8f87fa51c195840d8c2cb165aab100de8ca45298f11622b64baae790988"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-811b84f3ebf15151d8e78b7cc9e9abf384b70ca0212453f04caa06984e25cd186ef7b8f87fa51c195840d8c2cb165aab100de8ca45298f11622b64baae790988"' : 'data-target="#xs-injectables-links-module-AuthModule-811b84f3ebf15151d8e78b7cc9e9abf384b70ca0212453f04caa06984e25cd186ef7b8f87fa51c195840d8c2cb165aab100de8ca45298f11622b64baae790988"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-811b84f3ebf15151d8e78b7cc9e9abf384b70ca0212453f04caa06984e25cd186ef7b8f87fa51c195840d8c2cb165aab100de8ca45298f11622b64baae790988"' :
                                        'id="xs-injectables-links-module-AuthModule-811b84f3ebf15151d8e78b7cc9e9abf384b70ca0212453f04caa06984e25cd186ef7b8f87fa51c195840d8c2cb165aab100de8ca45298f11622b64baae790988"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AutoresModule.html" data-type="entity-link" >AutoresModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AutoresModule-09dc9773dc33125259b380e2b33a8a42578dbd189937de2564020e6981788e2efb57fa59d201bbc2dee198ac81693b1ed7dbe0b0097455da70f7ac1cdae49c01"' : 'data-target="#xs-controllers-links-module-AutoresModule-09dc9773dc33125259b380e2b33a8a42578dbd189937de2564020e6981788e2efb57fa59d201bbc2dee198ac81693b1ed7dbe0b0097455da70f7ac1cdae49c01"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AutoresModule-09dc9773dc33125259b380e2b33a8a42578dbd189937de2564020e6981788e2efb57fa59d201bbc2dee198ac81693b1ed7dbe0b0097455da70f7ac1cdae49c01"' :
                                            'id="xs-controllers-links-module-AutoresModule-09dc9773dc33125259b380e2b33a8a42578dbd189937de2564020e6981788e2efb57fa59d201bbc2dee198ac81693b1ed7dbe0b0097455da70f7ac1cdae49c01"' }>
                                            <li class="link">
                                                <a href="controllers/AutoresController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutoresController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AutoresModule-09dc9773dc33125259b380e2b33a8a42578dbd189937de2564020e6981788e2efb57fa59d201bbc2dee198ac81693b1ed7dbe0b0097455da70f7ac1cdae49c01"' : 'data-target="#xs-injectables-links-module-AutoresModule-09dc9773dc33125259b380e2b33a8a42578dbd189937de2564020e6981788e2efb57fa59d201bbc2dee198ac81693b1ed7dbe0b0097455da70f7ac1cdae49c01"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AutoresModule-09dc9773dc33125259b380e2b33a8a42578dbd189937de2564020e6981788e2efb57fa59d201bbc2dee198ac81693b1ed7dbe0b0097455da70f7ac1cdae49c01"' :
                                        'id="xs-injectables-links-module-AutoresModule-09dc9773dc33125259b380e2b33a8a42578dbd189937de2564020e6981788e2efb57fa59d201bbc2dee198ac81693b1ed7dbe0b0097455da70f7ac1cdae49c01"' }>
                                        <li class="link">
                                            <a href="injectables/AutoresService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutoresService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriasModule.html" data-type="entity-link" >CategoriasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoriasModule-12d4242765b16db08683c93f4fbf7f6293d2cec9ba6726994056ada1394d93458183bd1060627521f93b00887d4c6c609e5ff870d2cf3f88dafd0fd0231ee7b5"' : 'data-target="#xs-controllers-links-module-CategoriasModule-12d4242765b16db08683c93f4fbf7f6293d2cec9ba6726994056ada1394d93458183bd1060627521f93b00887d4c6c609e5ff870d2cf3f88dafd0fd0231ee7b5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriasModule-12d4242765b16db08683c93f4fbf7f6293d2cec9ba6726994056ada1394d93458183bd1060627521f93b00887d4c6c609e5ff870d2cf3f88dafd0fd0231ee7b5"' :
                                            'id="xs-controllers-links-module-CategoriasModule-12d4242765b16db08683c93f4fbf7f6293d2cec9ba6726994056ada1394d93458183bd1060627521f93b00887d4c6c609e5ff870d2cf3f88dafd0fd0231ee7b5"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriasController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriasController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoriasModule-12d4242765b16db08683c93f4fbf7f6293d2cec9ba6726994056ada1394d93458183bd1060627521f93b00887d4c6c609e5ff870d2cf3f88dafd0fd0231ee7b5"' : 'data-target="#xs-injectables-links-module-CategoriasModule-12d4242765b16db08683c93f4fbf7f6293d2cec9ba6726994056ada1394d93458183bd1060627521f93b00887d4c6c609e5ff870d2cf3f88dafd0fd0231ee7b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriasModule-12d4242765b16db08683c93f4fbf7f6293d2cec9ba6726994056ada1394d93458183bd1060627521f93b00887d4c6c609e5ff870d2cf3f88dafd0fd0231ee7b5"' :
                                        'id="xs-injectables-links-module-CategoriasModule-12d4242765b16db08683c93f4fbf7f6293d2cec9ba6726994056ada1394d93458183bd1060627521f93b00887d4c6c609e5ff870d2cf3f88dafd0fd0231ee7b5"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriasService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriasService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientesModule.html" data-type="entity-link" >ClientesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ClientesModule-7abb09cd93e6662a029657210c4d93158afb728f71394e2bc35a2a03d9c74234c77b2f9c3248480b2390e8ef7eff834f317620446ddee5aef7ac548ef18929db"' : 'data-target="#xs-controllers-links-module-ClientesModule-7abb09cd93e6662a029657210c4d93158afb728f71394e2bc35a2a03d9c74234c77b2f9c3248480b2390e8ef7eff834f317620446ddee5aef7ac548ef18929db"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientesModule-7abb09cd93e6662a029657210c4d93158afb728f71394e2bc35a2a03d9c74234c77b2f9c3248480b2390e8ef7eff834f317620446ddee5aef7ac548ef18929db"' :
                                            'id="xs-controllers-links-module-ClientesModule-7abb09cd93e6662a029657210c4d93158afb728f71394e2bc35a2a03d9c74234c77b2f9c3248480b2390e8ef7eff834f317620446ddee5aef7ac548ef18929db"' }>
                                            <li class="link">
                                                <a href="controllers/ClientesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ClientesModule-7abb09cd93e6662a029657210c4d93158afb728f71394e2bc35a2a03d9c74234c77b2f9c3248480b2390e8ef7eff834f317620446ddee5aef7ac548ef18929db"' : 'data-target="#xs-injectables-links-module-ClientesModule-7abb09cd93e6662a029657210c4d93158afb728f71394e2bc35a2a03d9c74234c77b2f9c3248480b2390e8ef7eff834f317620446ddee5aef7ac548ef18929db"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientesModule-7abb09cd93e6662a029657210c4d93158afb728f71394e2bc35a2a03d9c74234c77b2f9c3248480b2390e8ef7eff834f317620446ddee5aef7ac548ef18929db"' :
                                        'id="xs-injectables-links-module-ClientesModule-7abb09cd93e6662a029657210c4d93158afb728f71394e2bc35a2a03d9c74234c77b2f9c3248480b2390e8ef7eff834f317620446ddee5aef7ac548ef18929db"' }>
                                        <li class="link">
                                            <a href="injectables/ClientesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LibrosModule.html" data-type="entity-link" >LibrosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LibrosModule-e550a500855124f4292466dbc13883c0db71dda0244b378e495628d0a9a8036266b861c7993d773bebe89f20442d7bec722cf0dde6a501d3226cf0538abd2079"' : 'data-target="#xs-controllers-links-module-LibrosModule-e550a500855124f4292466dbc13883c0db71dda0244b378e495628d0a9a8036266b861c7993d773bebe89f20442d7bec722cf0dde6a501d3226cf0538abd2079"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LibrosModule-e550a500855124f4292466dbc13883c0db71dda0244b378e495628d0a9a8036266b861c7993d773bebe89f20442d7bec722cf0dde6a501d3226cf0538abd2079"' :
                                            'id="xs-controllers-links-module-LibrosModule-e550a500855124f4292466dbc13883c0db71dda0244b378e495628d0a9a8036266b861c7993d773bebe89f20442d7bec722cf0dde6a501d3226cf0538abd2079"' }>
                                            <li class="link">
                                                <a href="controllers/LibrosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LibrosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LibrosModule-e550a500855124f4292466dbc13883c0db71dda0244b378e495628d0a9a8036266b861c7993d773bebe89f20442d7bec722cf0dde6a501d3226cf0538abd2079"' : 'data-target="#xs-injectables-links-module-LibrosModule-e550a500855124f4292466dbc13883c0db71dda0244b378e495628d0a9a8036266b861c7993d773bebe89f20442d7bec722cf0dde6a501d3226cf0538abd2079"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LibrosModule-e550a500855124f4292466dbc13883c0db71dda0244b378e495628d0a9a8036266b861c7993d773bebe89f20442d7bec722cf0dde6a501d3226cf0538abd2079"' :
                                        'id="xs-injectables-links-module-LibrosModule-e550a500855124f4292466dbc13883c0db71dda0244b378e495628d0a9a8036266b861c7993d773bebe89f20442d7bec722cf0dde6a501d3226cf0538abd2079"' }>
                                        <li class="link">
                                            <a href="injectables/LibrosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LibrosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProfileModule-57b7ed5169695fba385da8a295543fab11212a5deacb69ff89e9e9e1d217748ddad21c233ee6383c9eef135a700240b4a92d024c629634129be89b2b2e5949ed"' : 'data-target="#xs-controllers-links-module-ProfileModule-57b7ed5169695fba385da8a295543fab11212a5deacb69ff89e9e9e1d217748ddad21c233ee6383c9eef135a700240b4a92d024c629634129be89b2b2e5949ed"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-57b7ed5169695fba385da8a295543fab11212a5deacb69ff89e9e9e1d217748ddad21c233ee6383c9eef135a700240b4a92d024c629634129be89b2b2e5949ed"' :
                                            'id="xs-controllers-links-module-ProfileModule-57b7ed5169695fba385da8a295543fab11212a5deacb69ff89e9e9e1d217748ddad21c233ee6383c9eef135a700240b4a92d024c629634129be89b2b2e5949ed"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfileModule-57b7ed5169695fba385da8a295543fab11212a5deacb69ff89e9e9e1d217748ddad21c233ee6383c9eef135a700240b4a92d024c629634129be89b2b2e5949ed"' : 'data-target="#xs-injectables-links-module-ProfileModule-57b7ed5169695fba385da8a295543fab11212a5deacb69ff89e9e9e1d217748ddad21c233ee6383c9eef135a700240b4a92d024c629634129be89b2b2e5949ed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-57b7ed5169695fba385da8a295543fab11212a5deacb69ff89e9e9e1d217748ddad21c233ee6383c9eef135a700240b4a92d024c629634129be89b2b2e5949ed"' :
                                        'id="xs-injectables-links-module-ProfileModule-57b7ed5169695fba385da8a295543fab11212a5deacb69ff89e9e9e1d217748ddad21c233ee6383c9eef135a700240b4a92d024c629634129be89b2b2e5949ed"' }>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeedModule.html" data-type="entity-link" >SeedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SeedModule-d089922c61d6e239536f557952a4c50b926d086f984e484c3a2fdc0850c1e480c577f090f478635315688be7f17dd5bdda82f7b79d7f38d7a4bfe2b6cf594c92"' : 'data-target="#xs-controllers-links-module-SeedModule-d089922c61d6e239536f557952a4c50b926d086f984e484c3a2fdc0850c1e480c577f090f478635315688be7f17dd5bdda82f7b79d7f38d7a4bfe2b6cf594c92"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SeedModule-d089922c61d6e239536f557952a4c50b926d086f984e484c3a2fdc0850c1e480c577f090f478635315688be7f17dd5bdda82f7b79d7f38d7a4bfe2b6cf594c92"' :
                                            'id="xs-controllers-links-module-SeedModule-d089922c61d6e239536f557952a4c50b926d086f984e484c3a2fdc0850c1e480c577f090f478635315688be7f17dd5bdda82f7b79d7f38d7a4bfe2b6cf594c92"' }>
                                            <li class="link">
                                                <a href="controllers/SeedController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeedController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SeedModule-d089922c61d6e239536f557952a4c50b926d086f984e484c3a2fdc0850c1e480c577f090f478635315688be7f17dd5bdda82f7b79d7f38d7a4bfe2b6cf594c92"' : 'data-target="#xs-injectables-links-module-SeedModule-d089922c61d6e239536f557952a4c50b926d086f984e484c3a2fdc0850c1e480c577f090f478635315688be7f17dd5bdda82f7b79d7f38d7a4bfe2b6cf594c92"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeedModule-d089922c61d6e239536f557952a4c50b926d086f984e484c3a2fdc0850c1e480c577f090f478635315688be7f17dd5bdda82f7b79d7f38d7a4bfe2b6cf594c92"' :
                                        'id="xs-injectables-links-module-SeedModule-d089922c61d6e239536f557952a4c50b926d086f984e484c3a2fdc0850c1e480c577f090f478635315688be7f17dd5bdda82f7b79d7f38d7a4bfe2b6cf594c92"' }>
                                        <li class="link">
                                            <a href="injectables/SeedService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeedService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AutoresController.html" data-type="entity-link" >AutoresController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriasController.html" data-type="entity-link" >CategoriasController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ClientesController.html" data-type="entity-link" >ClientesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LibrosController.html" data-type="entity-link" >LibrosController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProfileController.html" data-type="entity-link" >ProfileController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SeedController.html" data-type="entity-link" >SeedController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Autor.html" data-type="entity-link" >Autor</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Categoria.html" data-type="entity-link" >Categoria</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Cliente.html" data-type="entity-link" >Cliente</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Libro.html" data-type="entity-link" >Libro</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Profile.html" data-type="entity-link" >Profile</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateAutoreDto.html" data-type="entity-link" >CreateAutoreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoriaDto.html" data-type="entity-link" >CreateCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateClienteDto.html" data-type="entity-link" >CreateClienteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLibroDto.html" data-type="entity-link" >CreateLibroDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfileDto.html" data-type="entity-link" >CreateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAutoreDto.html" data-type="entity-link" >UpdateAutoreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoriaDto.html" data-type="entity-link" >UpdateCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateClienteDto.html" data-type="entity-link" >UpdateClienteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLibroDto.html" data-type="entity-link" >UpdateLibroDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProfileDto.html" data-type="entity-link" >UpdateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
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
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AutoresService.html" data-type="entity-link" >AutoresService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriasService.html" data-type="entity-link" >CategoriasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientesService.html" data-type="entity-link" >ClientesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LibrosService.html" data-type="entity-link" >LibrosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeedService.html" data-type="entity-link" >SeedService</a>
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
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
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