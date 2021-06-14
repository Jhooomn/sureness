(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4195,3925],{8465:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(7294),a=n(6010),s=n(9524),l={features:"features_2p0b",featureImage:"featureImage_2Rbd"};function i(e){var t=e.imageUrl,n=e.title,i=e.description,o=(0,s.Z)(t);return r.createElement("div",{className:(0,a.Z)("col col--4",l.feature)},o&&r.createElement("div",{className:"text--center"},r.createElement("img",{className:l.featureImage,src:o,alt:n})),r.createElement("h3",null,n),r.createElement("p",null,i))}},5448:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),a=n(6010),s="featureTitle_1sBy",l="featureContent_X9Lx",i="featureContentReversed_3gLf",o="featureImage_1CfO",c="darkSection_3BKa",m="featureImageReversed_1bU1";function u(e){var t=e.reversed,n=e.title,u=e.img,g=e.text,h=e.isDark,p=r.createElement("div",{className:(0,a.Z)("col col--6",o,t?m:"")},u),E=r.createElement("div",{className:(0,a.Z)("col col--6",l,t?i:"")},r.createElement("h3",{className:s},n),g);return r.createElement("section",{className:(0,a.Z)("highlightSection",h?c+" darkSection":"")},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t?r.createElement(r.Fragment,null,E,p):r.createElement(r.Fragment,null,p,E))))}},4104:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(3552),a=n(7294),s=n(6010),l="companyUsage_3sOj",i="logos_3g3Q",o="logoNavigation_3yj2",c="button_24Bd",m="buttonActive_WuSB",u=0,g=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={position:-0,activePage:0,swapInterval:0,pages:Math.ceil(t.logos?t.logos.length/6:1),margin:70},n.containerRef=a.createRef(),n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.containerRef.current.getBoundingClientRect(),t=Math.floor(e.width/150);this.setState({swapInterval:setInterval(this.nextPage.bind(this),5e3),pages:Math.ceil(this.props.logos?this.props.logos.length/t:1),margin:e.width<700?0:70})},n.componentWillUnmount=function(){clearInterval(this.state.swapInterval)},n.animateTo=function(e){var t=e*-(this.containerRef.current.getBoundingClientRect().width-this.state.margin);this.setState({position:t,activePage:e})},n.handleClick=function(e){this.animateTo(e),clearInterval(this.state.swapInterval),this.setState({swapInterval:setInterval(this.nextPage.bind(this),5e3)})},n.nextPage=function(){var e=this.state.pages-1,t=Math.floor(u/e)%2;this.animateTo(t?e-u%e:u%e),++u},n.render=function(){var e=this;return this.props&&this.props.logos?(this.buttons=function(){return[].concat(Array(e.state.pages)).map((function(t,n){return a.createElement("button",{onClick:function(){return e.handleClick(n)},key:n,className:(0,s.Z)(c,n===e.state.activePage?m:"")},n+1)}))},this.list=function(){return a.createElement("ul",{style:{transform:"translate("+e.state.position+"px, 0px)"}},e.props.logos.map((function(e,t){return a.createElement("li",{key:t},a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},a.createElement("img",{src:"img/icons/"+e.img,alt:e.alt})))})))},a.createElement("div",{className:l,ref:this.containerRef},a.createElement("h3",null,this.props.headerTitle),a.createElement("div",{className:(0,s.Z)(i)},this.list(),a.createElement("div",{className:o},this.buttons())))):a.createElement("div",null)},t}(a.Component)},3253:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),a={section:"section_2F2o",darkSection:"darkSection_2bDk"};function s(e){var t=e.isDark,n=e.children;return r.createElement("section",{className:[a.section].concat(t?[a.darkSection,"darkSection"]:[]).join(" ")},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},n)))}},7015:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(2122),a=n(7294),s=n(6010),l=n(8171),i=n(8238),o=n(2511),c=n(9962),m=n(9524),u=n(7130),g=n(8465),h=n(3253),p=n(5448),E=n(4104),f={heroBanner:"heroBanner_3P7f",buttons:"buttons_1r9m",frameworkLogos:"frameworkLogos_lURf",reactImage:"reactImage_2YKi",social:"social_1Zu7",tweetBtn:"tweetBtn_2SHy"},d=[{title:(0,u.I)({message:"Extendable"}),description:a.createElement(a.Fragment,null,a.createElement(u.Z,{values:{restApi:a.createElement("strong",null,"REST API"),rbac:a.createElement("strong",null,"RBAC"),authentication:a.createElement("strong",null,"authentication"),authorization:a.createElement("strong",null,"authorization"),simple:a.createElement("strong",null,"simple"),useful:a.createElement("strong",null,"useful"),interface:a.createElement("strong",null,"\u6269\u5c55\u63a5\u53e3"),sample:a.createElement("strong",null,"\u6837\u4f8b"),doc:a.createElement("strong",null,"\u6587\u6863"),br:a.createElement("br",null)}},"Focus on the protection of {restApi}. Based on {rbac}.{br}Provides {authentication} and {authorization}, etc.{br}Extension custom interface is {simple} and really {useful}."))},{title:(0,u.I)({message:"Compatible"}),description:a.createElement(a.Fragment,null,a.createElement(u.Z,{values:{WebSockets:a.createElement("strong",null,"WebSockets"),Servlet:a.createElement("strong",null,"Servlet"),JaxRs:a.createElement("strong",null,"JAX-RS"),native:a.createElement("strong",null,"Native"),SpringBoot:a.createElement("strong",null,"Spring Boot"),SpringWebFlux:a.createElement("strong",null,"Spring WebFlux"),Javalin:a.createElement("strong",null,"Javalin"),Quarkus:a.createElement("strong",null,"Quarkus"),Ktor:a.createElement("strong",null,"Ktor"),Micronaut:a.createElement("strong",null,"Micronaut"),Solon:a.createElement("strong",null,"Solon"),Jfinal:a.createElement("strong",null,"Jfinal"),br:a.createElement("br",null)}},"Support {WebSockets}, HTTP containers ({Servlet} and {JaxRs}).{br}No framework dependency.{native} supports {SpringBoot}, {SpringWebFlux}, {Javalin}, {Quarkus},{Ktor}, {Solon}, {Jfinal}, {Micronaut} etc."))},{title:(0,u.I)({message:"Multi And Fast"}),description:a.createElement(a.Fragment,null,a.createElement(u.Z,{values:{jwt:a.createElement("strong",null,"JWT"),basic:a.createElement("strong",null,"Basic Auth"),digest:a.createElement("strong",null,"Digest Auth"),dynamic:a.createElement("strong",null,"Dynamic"),perm:a.createElement("strong",null,"permissions"),dynamicCn:a.createElement("strong",null,"\u52a8\u6001\u4fee\u6539\u6743\u9650"),high:a.createElement("strong",null,"High performance"),highCn:a.createElement("strong",null,"\u9ad8\u6027\u80fd"),tree:a.createElement("strong",null,"Dictionary Matching Tree"),treeCn:a.createElement("strong",null,"\u6539\u8fdb\u7684\u5b57\u5178\u5339\u914d\u6811"),br:a.createElement("br",null)}},"Supports {jwt}, {basic}, {digest} etc.{br}{dynamic} modification of {perm}.{br}{high} with {tree}."))}],b=[{img:"justauth_logo.png",alt:"Justauth",url:"https://justauth.wiki/"},{img:"maxkey_logo.png",alt:"MaxKey",url:"https://maxkey.top/"},{img:"pha_logo.jfif",alt:"pha_api",url:"https://www.phalapi.net/"}];var v=function(){var e=(0,c.default)().siteConfig,t=void 0===e?{}:e;return a.createElement(l.Z,{title:t.title+" \xb7 "+t.tagline,description:""+t.tagline},a.createElement("header",{className:(0,s.Z)("hero hero--primary",f.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},a.createElement("img",{src:"img/brand128.svg"})),a.createElement("p",{className:"hero__subtitle"},a.createElement(u.Z,null,"Focus on Protection of API")),a.createElement("div",{className:f.social},a.createElement("a",{href:"https://www.apache.org/licenses/LICENSE-2.0.html"},a.createElement("img",{src:"https://img.shields.io/badge/license-Apache%202-4EB1BA.svg"})),a.createElement("a",{href:"https://search.maven.org/artifact/com.usthe.sureness/sureness-core"},a.createElement("img",{src:"https://img.shields.io/badge/Maven%20Central-1.0.3-blue.svg"})),a.createElement("a",{href:"https://www.apache.org/licenses/LICENSE-2.0.html"},a.createElement("img",{src:"https://img.shields.io/github/release-date/dromara/sureness?color=blue&logo=figshare&logoColor=red"})),a.createElement("a",{href:"https://img.shields.io/github/status/contexts/pulls/dromara/sureness/8?label=pull%20checks"},a.createElement("img",{src:"https://img.shields.io/github/status/contexts/pulls/dromara/sureness/8?label=pull%20checks"}))),a.createElement("div",{className:f.buttons},a.createElement(o.Z,{className:(0,s.Z)("button button--outline button--secondary button--lg",f.getStarted),to:(0,m.Z)("docs/")},a.createElement(u.Z,null,"Get Started")),a.createElement(o.Z,{to:"https://github.com/dromara/sureness",className:(0,s.Z)("button button--outline button--secondary button--lg",f.getStarted)},"Github"),a.createElement(o.Z,{to:"https://gitee.com/dromara/sureness",className:(0,s.Z)("button button--outline button--secondary button--lg",f.getStarted)},"Gitee")))),a.createElement("main",null,d&&d.length>0&&a.createElement(h.default,{isDark:!0},d.map((function(e,t){return a.createElement(g.default,(0,r.Z)({key:t},e))}))),a.createElement(p.default,{img:a.createElement(i.Z,{className:"js",children:'\n    @Override\n    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)\n            throws IOException, ServletException {\n        try {\n            SubjectSum subject = SurenessSecurityManager.getInstance().checkIn(servletRequest);\n        } catch (IncorrectCredentialsException | UnknownAccountException | ExpiredCredentialsException e1) {\n            logger.debug("this request account info is illegal");\n            responseWrite(ResponseEntity\n                    .status(HttpStatus.UNAUTHORIZED).body(e1.getMessage()), servletResponse);\n            return;\n        } catch (UnauthorizedException e4) {\n            logger.debug("this account can not access this resource");\n            responseWrite(ResponseEntity\n                    .status(HttpStatus.FORBIDDEN).body(e4.getMessage()), servletResponse);\n            return;\n        } catch (RuntimeException e) {\n            logger.error("other exception happen: ", e);\n            responseWrite(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(),\n                    servletResponse);\n            return;\n        }\n        filterChain.doFilter(servletRequest, servletResponse);\n    }\n'}),reversed:!0,title:(0,u.I)({message:"Support for Jvm Modern Frameworks"}),text:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(u.Z,{values:{Spring:a.createElement("a",{href:"https://spring.io/"},"Spring"),SpringBoot:a.createElement("a",{href:"https://spring.io/"},"Spring Boot"),SpringWebFlux:a.createElement("a",{href:"https://spring.io"},"Spring WebFlux"),Javalin:a.createElement("a",{href:"https://javalin.io/"},"Javalin"),Quarkus:a.createElement("a",{href:"https://quarkus.io/"},"Quarkus"),Micronaut:a.createElement("a",{href:"https://micronaut.io/"},"Micronaut"),Solon:a.createElement("a",{href:"https://gitee.com/noear/solon"},"Solon"),Jfinal:a.createElement("a",{href:"https://jfinal.com/"},"Jfinal"),Ktor:a.createElement("a",{href:"https://ktor.io/"},"Ktor"),br:a.createElement("br",null)}},"Sureness allows you to security any server written with jvm modern frameworks such as {Spring}, {SpringBoot}, {SpringWebFlux}, {Javalin}, {Quarkus}, {Micronaut}, {Solon}, {Jfinal} or {Ktor} as well as frameworks for Kotlin.")),a.createElement("p",null,a.createElement(u.Z,{values:{interceptor:a.createElement("strong",null,"interceptor"),handling:a.createElement("strong",null,"Exception Handling Process"),checkIn:a.createElement("code",null,"checkIn()"),SubjectSum:a.createElement("strong",null,"SubjectSum"),br:a.createElement("br",null)}},"The essence of Sureness is to use {interceptor}(like servlet filter or Spring interceptor)  to intercept all rest requests for authenticating and authorizing.{br}So no matter any framework, as long as it has a interceptor, it can integrate with sureness. Sureness uses {handling}, {checkIn} will return {SubjectSum}(user information) when auth success, or throw different types of auth exceptions when auth error.")),a.createElement("div",null,a.createElement("h4",null,"Native Support for:"),a.createElement("a",{href:"https://spring.io/",className:f.frameworkLogos},a.createElement("img",{src:"img/icons/spring-logo.svg",alt:"spring"})),a.createElement("a",{href:"https://javalin.io/",className:f.frameworkLogos},a.createElement("img",{src:"img/icons/javalin_logo.svg",alt:"Javalin"})),a.createElement("a",{href:"https://micronaut.io/",className:f.frameworkLogos},a.createElement("img",{src:"img/icons/micronaut_logo.png",alt:"Micronaut"})),a.createElement("a",{href:"https://quarkus.io/",className:f.frameworkLogos},a.createElement("img",{src:"img/icons/quarkus_logo.svg",alt:"Quarkus"})),a.createElement("a",{href:"https://ktor.io/",className:f.frameworkLogos},a.createElement("img",{src:"img/icons/ktor_logo.svg",alt:"Ktor"}))))}),a.createElement(p.default,{img:a.createElement("img",{width:"760",height:"445",src:"img/compare.png"}),isDark:!0,title:(0,u.I)({message:"Multi Support Samples"}),text:a.createElement(a.Fragment,null,a.createElement("p",null,"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/sample-bootstrap"}," Spring Boot sample(configuration file scheme)"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/sample-tom"}," Spring Boot sample(database scheme)"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/samples/quarkus-sureness"}," Quarkus sample"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/samples/javalin-sureness"}," Javalin sample"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/samples/ktor-sureness"}," Ktor sample"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/samples/spring-webflux-sureness"}," Spring Webflux sample"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/samples/micronaut-sureness"}," Micronaut sample"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/samples/jfinal-sureness"}," Jfinal sample"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/samples/solon-sureness"}," Solon sample"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/samples/spring-gateway-sureness"}," Spring Gateway sample"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/samples/zuul-sureness"}," Zuul sample"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/samples/sureness-session"}," Session sample"),a.createElement("br",null),"Sureness integrate ",a.createElement("a",{href:"https://github.com/dromara/sureness/tree/master/samples/sureness-redis-session"}," Redis Session cache sample"),a.createElement("br",null)))}),a.createElement(p.default,{img:a.createElement("img",{width:"560",height:"415",src:"img/benchmark_en.png"}),reversed:!0,title:(0,u.I)({message:"Benchmark Compare"}),text:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(u.Z,{values:{Benchmark:a.createElement("a",{href:"https://github.com/tomsun28/sureness-shiro-spring-security-benchmark"},"Benchmark"),times3:a.createElement("strong",null,"3 times "),times4:a.createElement("strong",null,"4 times "),times3cn:a.createElement("strong",null,"3 \u500d "),times4cn:a.createElement("strong",null,"4 \u500d "),increases:a.createElement("strong",null,"The performance gap will be further widened as the api matching chain increases"),increaseCn:a.createElement("strong",null,"\u6027\u80fd\u5dee\u8ddd\u4f1a\u968f\u7740api\u5339\u914d\u94fe\u7684\u589e\u52a0\u800c\u8fdb\u4e00\u6b65\u62c9\u5927"),br:a.createElement("br",null)}},"{Benchmark} test shows Sureness to lose 0.026ms performance compared to frameless application, Shiro lose 0.088ms, Spring Security lose 0.116ms.{br}In contrast, Sureness basically does not consume performance, and the performance (TPS loss) is {times3} that of Shiro and {times4} that of Spring Security.{br}{increases}.")),a.createElement("p",null,a.createElement("code",null,"ab -n 4000 -c 50 -A root:23456 localhost:8088/api/v1/source1"),a.createElement("br",null),"Detail see ",a.createElement("a",{href:"https://github.com/tomsun28/sureness-shiro-spring-security-benchmark"},"Benchmark Test")))}),a.createElement(p.default,{img:a.createElement("img",{width:"760",height:"405",src:"img/PathRoleMatcher.svg"}),isDark:!0,title:(0,u.I)({message:"Why Is High Performance"}),text:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(u.Z,{values:{filter:a.createElement("strong",null,"filter chain"),linear:a.createElement("strong",null,"linear matching"),linearCn:a.createElement("strong",null,"\u7ebf\u6027\u8fc7\u6ee4\u94fe\u5339\u914d"),tree:a.createElement("strong",null,"dictionary matching tree"),treeCn:a.createElement("strong",null,"\u6539\u8fdb\u7684\u5b57\u5178\u5339\u914d\u6811"),ant:a.createElement("strong",null,"linear ant matching"),antCn:a.createElement("strong",null,"\u7ebf\u6027Ant\u5339\u914d"),effective:a.createElement("strong",null,"effective"),effCn:a.createElement("strong",null,"\u8f83\u5927\u6027\u80fd"),br:a.createElement("br",null)}},"In a large number of requests, we found that the {linear} of the {filter} is a performance bottleneck. {br}So we used a {tree} instead of {ant}.{br}Practice has proved that it is very {effective}.")))}),a.createElement(p.default,{img:a.createElement(i.Z,{className:"bash",children:"\n<dependency>\n    <groupId>com.usthe.sureness</groupId>\n    <artifactId>sureness-core</artifactId>\n    <version>1.0.3</version>\n</dependency>\n\ncompile group: 'com.usthe.sureness', name: 'sureness-core', version: '1.0.3'\n"}),reversed:!0,title:(0,u.I)({message:"Get Started With Sureness within Minutes"}),text:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(u.Z,{values:{br:a.createElement("br",null)}},"We provide many tutorials and samples, you can refer to them to builda complete permission project within 10 minutes.{br}Have Fun!")))}),a.createElement(h.default,null,a.createElement(E.default,{logos:b,headerTitle:(0,u.I)({message:"Friend Links"})}))))}}}]);