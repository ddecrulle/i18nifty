(this.webpackJsonpi18nifty_landingpage=this.webpackJsonpi18nifty_landingpage||[]).push([[0],{535:function(e,t,n){"use strict";n.r(t);var a=n(54),o=n(0),i=n(90),r=n(237),s={home:Object(i.c)("/")};Object(r.makeThisModuleAnExecutableRouteLister)(s);var c=Object(i.b)({scrollToTop:!1},s),l=c.RouteProvider,u=c.useRoute,d=c.routes,p="https://github.com/garronej/i18nifty",b="https://stackblitz.com/edit/react-ts-m4d8w7?file=components/LanguageSwitch.tsx",h=n(51),g=Object(h.createI18nApi)()({languages:["en","fr"],fallbackLanguage:"en",doPersistLanguageInLocalStorage:!0},{en:{App:{documentation:"Documentation","try it":"Try it"},Home:{"hero text subtext":"Type-safe internationalization and translation in React",subTitle:"A i18n library designed to leverage TypeScript's type inference capability.","article title":"Localization is much less of a chore when assisted by intellisense.","article body":"With i18nifty you get red squiggly lines wherever translations are missing.  \n\t\t\t\tWhen using the translation function you are provided with a list of available keys in the context of a given component.\n\t\t\t\t","try now":"Try in a playground"},FourOhFour:{"not found":"Page not found"}},fr:{App:{documentation:"Documentation","try it":"Essayez"},Home:{"hero text subtext":"Type-safe internationalisation et traduction en React",subTitle:"Une libraire i18n con\xe7u pour tirer profit des capacit\xe9s d'inf\xe9rence de TypeScript.","article title":"Guid\xe9e par intllisense, la localisation n'est plus autant une corv\xe9e.","article body":"Avec i18n, partout o\xf9 des traductions sont manquante vous aurez du rouge.  \n\t\t\t\tQuand vous utilisez la fonction de traduction, les clefs disponibles dans le context d'un composant donn\xe9 vous seront propos\xe9.","try now":"Essayez dans une sandbox"},FourOhFour:{"not found":"Page non trouv\xe9e"}}}),m=g.useTranslation,y=(g.resolveLocalizedString,g.useLang),j=(g.useResolveLocalizedString,n(41)),f=n(18),O=n(70),x=n(83),v=n(108),S=n(155),T=n(49),w=n(241),L=n(244),k=n.n(L),I=n(156),F=n.n(I),W=n(242),B=n(243),P=n(107),G=Object(f.createThemeProvider)({getTypographyDesc:function(e){return Object(j.a)(Object(j.a)({},Object(f.defaultGetTypographyDesc)(e)),{},{fontFamily:'"Work Sans", sans-serif'})},palette:f.ultravioletPalette}),R=G.ThemeProvider,A=G.useTheme,H=Object(T.createMakeStyles)({useTheme:A}),z=H.makeStyles,C=(H.useStyles,Object(O.createIcon)({accessTime:k.a,sentimentSatisfied:F.a}).Icon),D=(Object(x.createIconButton)({Icon:C}).IconButton,Object(v.createButton)({Icon:C}).Button,Object(S.createText)({useTheme:A}).Text),E={Logo:Object(P.createOnyxiaSplashScreenLogo)({useTheme:A}).OnyxiaSplashScreenLogo,minimumDisplayDuration:0},_=(Object(w.createPageHeader)({Icon:C}).PageHeader,Object(W.createButtonBarButton)({Icon:C}).ButtonBarButton,Object(B.createLanguageSelect)({languagesPrettyPrint:{en:"English",fr:"Fran\xe7ais"}}).LanguageSelect),V=n(3),M=Object(o.memo)((function(){var e=m({FourOhFour:M}).t,t=K().classes;return Object(V.jsx)("div",{className:t.root,children:Object(V.jsxs)(D,{typo:"page heading",children:[e("not found")," \ud83d\ude25"]})})})),K=z({name:{FourOhFour:M}})((function(e){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.colors.useCases.surfaces.background}}})),N=(Object(h.declareComponentKeys)()({FourOhFour:M}).i18n,n(245)),U=n(246),q=n(157),J=n.p+"static/media/demo_1.beef42c2.mp4",Q=n.p+"static/media/demo_1.70105f5e.webm",X=n.p+"static/media/demo_2.67a024ab.mp4",Y=n.p+"static/media/demo_2.95e716b2.webm",Z=n(250);function $(){var e=m({Home:$}).t,t=ee().classes;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(U.GlHero,{title:Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(q.GlHeroText,{children:"i18nifty"}),Object(V.jsx)(D,{typo:"display heading",className:t.title2,children:e("hero text subtext")})]}),subTitle:e("subTitle"),illustration:{type:"video",sources:[{src:J,type:"video/mp4"},{src:Q,type:"video/webm"}],hasShadow:!0},hasLinkToSectionBellow:!0,classes:{subtitle:t.heroSubtitle,imageWrapper:t.heroImageWrapper,textWrapper:t.heroTextWrapper,illustration:t.heroImage}}),Object(V.jsx)(Z.GlArticle,{id:"firstSection",title:e("article title"),body:e("article body"),buttonLabel:e("try now"),buttonLink:{href:b},classes:{video:t.articleVideo},illustration:{type:"video",sources:[{src:X,type:"video/mp4"},{src:Y,type:"video/webm"}]},hasAnimation:!0,illustrationPosition:"left"})]})}$.routeGroup=Object(i.a)([d.home]);Object(h.declareComponentKeys)()({Home:$}).i18n;var ee=z({name:{Home:$}})((function(e){return{heroImage:{borderRadius:10,maxWidth:700},articleVideo:{maxWidth:500,borderRadius:10},title2:{color:e.colors.useCases.typography.textFocus,fontStyle:"italic"},heroSubtitle:{color:e.colors.useCases.typography.textPrimary},heroImageWrapper:Object(j.a)({},e.windowInnerWidth>=f.breakpointsValues.lg?{paddingRight:30,paddingLeft:30}:{}),heroTextWrapper:Object(j.a)({},e.windowInnerWidth>=f.breakpointsValues.lg?{marginLeft:70}:{})}})),te=n(251),ne=n(252),ae=n.p+"static/media/banner_dark.e854ac3e.png",oe=n.p+"static/media/banner_light.616d8255.png",ie=Object(o.memo)((function(){var e=u(),t=y(),n=t.lang,a=t.setLang,i=Object(f.useSplashScreen)().hideRootSplashScreen;Object(o.useEffect)((function(){i()}),[]);var r=m({App:ie}).t,s=re(),c=s.classes,l=s.theme;return Object(V.jsx)(N.GlTemplate,{header:Object(V.jsx)(te.GlHeader,{title:Object(V.jsx)(ne.GlLogo,{logoUrl:l.isDarkModeEnabled?ae:oe,width:150}),links:[{label:"GitHub",href:p},{label:r("documentation"),href:"https://docs.i18nifty.dev"},{label:r("try it"),href:b}],enableDarkModeSwitch:!0,githubRepoUrl:p,githubButtonSize:"large",showGithubStarCount:!0,customItemEnd:Object(V.jsx)(_,{className:c.languageSelect,language:n,onLanguageChange:a,variant:"big"})}),headerOptions:{position:"sticky",isRetracted:"smart"},children:function(){var t=$;return t.routeGroup.has(e)?Object(V.jsx)(t,{}):Object(V.jsx)(M,{})}()})})),re=(Object(h.declareComponentKeys)()({App:ie}).i18n,z({name:{App:ie}})((function(e){return{languageSelect:{marginLeft:e.spacing(3),display:function(){if(!(e.windowInnerWidth>=f.breakpointsValues.lg))return"none"}()}}})));Object(a.render)(Object(V.jsx)(l,{children:Object(V.jsx)(R,{splashScreen:E,children:Object(V.jsx)(ie,{})})}),document.getElementById("root"))}},[[535,1,2]]]);
//# sourceMappingURL=main.f831ef20.chunk.js.map