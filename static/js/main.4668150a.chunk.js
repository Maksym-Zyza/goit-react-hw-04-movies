(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),n=a(30),c=a.n(n),i=a(13),o=a(14),l=a(16),u=a(15),m=a(9),p=a(2),v=a(32),d=a(8),j=a.n(d),h=a(17),b=a(11),O=a.n(b),x=a(10),f=a.n(x);O.a.defaults.baseURL="https://api.themoviedb.org/3/",O.a.defaults.params={api_key:"523a15ded98cd05fab36993344058e43",language:"en-US"};var g=function(){var e=Object(h.a)(j.a.mark((function e(){var t,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"trending/movie/day"},e.next=4,O()(t);case 4:return a=e.sent,r=a.data,e.abrupt("return",r.results);case 9:return e.prev=9,e.t0=e.catch(0),alert(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();function N(e,t){return _.apply(this,arguments)}function _(){return(_=Object(h.a)(j.a.mark((function e(t,a){var r,s,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"search/movie",params:{query:t,page:a}},e.next=4,O()(r);case 4:if(s=e.sent,0!==(n=s.data).results.lenth){e.next=9;break}return alert("Nothing, plese try again"),e.abrupt("return");case 9:return e.abrupt("return",n.results);case 12:return e.prev=12,e.t0=e.catch(0),alert(e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function w(){return(w=Object(h.a)(j.a.mark((function e(t){var a,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={url:"movie/".concat(t)},e.next=4,O()(a,t);case 4:return r=e.sent,s=r.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),alert(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function y(){return(y=Object(h.a)(j.a.mark((function e(t){var a,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={url:"movie/".concat(t,"/credits")},r=O()(a,t),s=r.data,e.abrupt("return",s.results);case 6:return e.prev=6,e.t0=e.catch(0),alert(e.t0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function k(){return(k=Object(h.a)(j.a.mark((function e(t){var a,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={url:"movie/".concat(t,"/reviews")},r=O()(a,t),s=r.data,e.abrupt("return",s.results);case 6:return e.prev=6,e.t0=e.catch(0),alert(e.t0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}N.propTypes={query:f.a.string.isRequired,page:f.a.number.isRequired};var q={getMoviesTrending:g,getSerchMovies:N,getMovieDetails:function(e){return w.apply(this,arguments)},getMovieCredits:function(e){return y.apply(this,arguments)},getMoviesReviews:function(e){return k.apply(this,arguments)}},L=a(0),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={trending:[],src:"https://image.tmdb.org/t/p/w500",location:p.f},e.fetchTrending=function(){q.getMoviesTrending().then((function(t){e.setState({trending:Object(v.a)(t)})}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchTrending()}},{key:"render",value:function(){var e=this.state,t=e.trending,a=e.src,r=e.location;return console.log(t),Object(L.jsxs)("div",{className:"container",children:[Object(L.jsx)("h2",{className:"page_title",children:" Today trending movies "}),Object(L.jsx)("ul",{className:"movies_ul",children:t.map((function(e){var t=e.id,s=e.poster_path,n=e.title,c=e.vote_average;return Object(L.jsx)(m.b,{to:{pathname:"/movies/".concat(t),from:r.pathname},children:Object(L.jsxs)("li",{className:"movies_li",children:[Object(L.jsx)("img",{className:"movies_img",src:"".concat(a).concat(s),alt:n}),Object(L.jsxs)("p",{className:"movies_title",children:[" ",n]}),Object(L.jsx)("p",{className:"movies_rating",children:Object(L.jsx)("span",{className:"rating",children:c})})]},t)})}))})]})}}]),a}(s.a.Component),C=function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:" MoviesPage page "}),Object(L.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores quia dolorum porro quidem officiis impedit molestias quaerat numquam nobis ipsa eos laborum quisquam dignissimos rerum, mollitia pariatur soluta quibusdam!"})]})},R=a(33),D=function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:" Cast page "}),Object(L.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores quia dolorum porro quidem officiis impedit molestias quaerat numquam nobis"})]})},T=function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:" Reviews page "}),Object(L.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores quia dolorum porro quidem officiis impedit molestias quaerat numquam nobis"})]})},A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={src:"https://image.tmdb.org/t/p/w500",release_date:null},e.fetchDetails=function(){var t=e.props.match.params.movieId;q.getMovieDetails(t).then((function(t){e.setState(Object(R.a)({},t))}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchDetails()}},{key:"render",value:function(){var e=this.state,t=e.src,a=e.original_title,r=e.poster_path,s=e.overview,n=e.release_date,c=e.popularity,i=e.vote_average,o=e.vote_count;return console.log(this.state),Object(L.jsxs)("div",{className:"movie_div container",children:[Object(L.jsx)("h2",{className:"movie_title",children:a}),r&&Object(L.jsx)("img",{className:"movie_img",src:"".concat(t).concat(r),alt:a}),Object(L.jsxs)("div",{className:"movie_info",children:[Object(L.jsxs)("p",{className:"movie_text",children:["Release: ",Object(L.jsx)("span",{className:"movie_data",children:n})]}),Object(L.jsx)("h3",{className:"movie_overview",children:"Overview "}),Object(L.jsx)("span",{className:"movie_text",children:s}),Object(L.jsxs)("p",{className:"movie_text",children:["Popularity: ",Object(L.jsx)("span",{className:"movie_data",children:c})]}),Object(L.jsxs)("p",{className:"movie_text",children:["Rating: ",Object(L.jsx)("span",{className:"movie_data",children:i})]}),Object(L.jsxs)("p",{className:"movie_text",children:["Count: ",Object(L.jsx)("span",{className:"movie_data",children:o})]}),Object(L.jsx)("h3",{className:"movie_text",children:"Genres"})]}),Object(L.jsxs)("div",{className:"navlink_div",children:[Object(L.jsxs)(m.c,{to:"".concat(this.props.match.url,"/cast"),className:"NavLink link",activeClassName:"NavLink-active",children:["Cast ",Object(L.jsx)("span",{className:"link_sign",children:"\u25bc"})]}),Object(L.jsxs)(m.c,{to:"".concat(this.props.match.url,"/reviews"),className:"NavLink link",activeClassName:"NavLink-active",children:["Reviews ",Object(L.jsx)("span",{className:"link_sign",children:"\u25bc"})]})]}),Object(L.jsxs)(p.c,{children:[Object(L.jsx)(p.a,{path:"/movies/:movieId/cast",component:D}),Object(L.jsx)(p.a,{path:"movies/:movieId/reviews",component:T})]})]})}}]),a}(s.a.Component),I=function(){return Object(L.jsx)("div",{children:Object(L.jsx)("h2",{className:"NotFound",children:" 404 - Not Found Viev page "})})},S=(a(66),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("div",{className:"NavDiv",children:[Object(L.jsx)(m.c,{exact:!0,to:"/",className:"NavLink",activeClassName:"NavLink-active",children:"Home"}),Object(L.jsx)(m.c,{to:"/movies",className:"NavLink",activeClassName:"NavLink-active",children:"Movies"}),Object(L.jsx)("a",{href:"https://www.themoviedb.org/",children:Object(L.jsx)("img",{className:"nav_img",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",alt:"img themoviedb.org"})})]}),Object(L.jsxs)(p.c,{children:[Object(L.jsx)(p.a,{exact:!0,path:"/",component:M}),Object(L.jsx)(p.a,{exact:!0,path:"/movies",component:C}),Object(L.jsx)(p.a,{path:"/movies/:movieId",component:A}),Object(L.jsx)(p.a,{component:I})]})]})}}]),a}(s.a.Component));a(67);c.a.render(Object(L.jsx)(s.a.StrictMode,{children:Object(L.jsx)(m.a,{children:Object(L.jsx)(S,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.4668150a.chunk.js.map