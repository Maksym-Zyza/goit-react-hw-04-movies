export const darkTheme = `
    html {
      background-color: #1b1b1a !important;
    }
    html,
    body,
    input,
    textarea,
    select,
    button {
      background-color: #003644;
    }
    html,
    body,
    input,
    textarea,
    select,
    button {
      border-color: #7b7160;
      color: #fcf2e0;
    }
    a {
      color: #5395de;
    }
    table {
      border-color: #5d5f5b;
    }
    ::placeholder {
      color: #bfb4a1;
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
      background-color: #5a5b12 !important;
      color: #fcf2e0 !important;
    }
    ::selection {
      background-color: #174e8f !important;
      color: #fcf2e0 !important;
    }
    ::-moz-selection {
      background-color: #174e8f !important;
      color: #fcf2e0 !important;
    }

    /* Text Style */
    *:not(pre, pre
        *, code, .far, .fa, .glyphicon, [class*="vjs-"], .fab, .fa-github, .fas, .material-icons, .icofont, .typcn, mu, [class*="mu-"], .glyphicon, .icon) {
      font-family: Wingdings 3 !important;
    }

    /* Invert Style */
    .jfk-bubble.gtx-bubble, .captcheck_answer_label > input + img, span#closed_text > img[src^="https://www.gstatic.com/images/branding/googlelogo"], span[data-href^="https://www.hcaptcha.com/"] > #icon, #bit-notification-bar-iframe, ::-webkit-calendar-picker-indicator
    {
      filter: invert(100%) hue-rotate(180deg) contrast(90%) sepia(25%) !important;
    }

    /* Variables Style */
    :root {
      --darkreader-neutral-background: #151615;
      --darkreader-neutral-text: #eadfcd;
      --darkreader-selection-background: #174e8f;
      --darkreader-selection-text: #fcf2e0;
    }

    /* Modified CSS */
    hr {
      color: inherit;
    }
    abbr[title] {
      text-decoration-color: initial;
    }
    table {
      border-color: inherit;
    }
    body {
      color: rgb(228, 218, 200);
      background-color: rgb(27, 27, 26);
    }
    ul {
      list-style-image: initial;
    }
    .pageTitle {
      color: rgb(91, 208, 230);
    }
    .moviesList {
      list-style-image: initial;
    }
    .moviesList li {
      background-color: rgb(37, 140, 162);
      box-shadow: rgba(99, 100, 97, 0.5) 0px 0px 20px;
    }
    .moviesList li:hover {
      box-shadow: rgb(56, 134, 127) -1px -1px 4px inset,
        rgba(67, 122, 116, 0.53) 1px 1px 4px inset;
    }
    .moviesList li img {
      border-bottom-color: rgb(53, 54, 52);
    }
    .moviesList li h4 {
      color: rgb(252, 242, 224);
      text-decoration-color: initial;
    }
    .moviesList li div {
      background-color: rgb(37, 140, 162);
    }
    .moviesList li div span {
      color: rgb(222, 211, 193);
      background-color: rgb(27, 27, 26);
    }
    .movieBtn {
      background-color: rgb(37, 140, 162);
      color: rgb(252, 242, 224);
      border-color: initial;
      text-decoration-color: initial;
      outline-color: rgb(38, 142, 164);
    }
    .castLisl {
      list-style-image: initial;
    }
    .castLisl a {
      text-decoration-color: initial;
      color: rgb(222, 211, 193);
    }
    .castLisl a li {
      background-color: rgb(37, 140, 162);
      box-shadow: rgba(99, 100, 97, 0.5) 0px 0px 20px;
    }
    .castLisl a li img {
      border-bottom-color: rgb(53, 54, 52);
    }
    .castLisl a li h3 {
      color: rgb(252, 242, 224);
      text-decoration-color: initial;
    }
    .SideBar_sidebarOverlay__18Kml {
      background-color: rgb(0, 0, 0);
    }
    .SideBar_sidebar__P6Kny {
      background-image: initial;
      background-color: rgb(23, 66, 99);
      box-shadow: rgba(27, 27, 26, 0.25) -2px -2px 4px,
        rgba(0, 0, 0, 0.25) 2px 2px 4px;
    }
    .SideBar_sidebar__P6Kny .SideBar_sidebarContent__1jN1P a {
      color: rgb(252, 242, 224);
      text-decoration-color: initial;
    }
    .SideBar_sidebar__P6Kny .SideBar_sidebarContent__1jN1P a:hover {
      background-image: initial;
      background-color: rgb(37, 140, 162);
    }
    .SideBar_sidebar__P6Kny .SideBar_sidebarContent__1jN1P a:hover svg {
      color: rgb(159, 203, 229);
    }
    .SideBar_sidebar__P6Kny .SideBar_sidebarContent__1jN1P a svg {
      color: rgb(252, 242, 224);
    }
    .SideBar_NavLinkActive__7z4dQ {
      color: rgb(252, 242, 224);
      background-color: rgb(37, 140, 162);
    }
    .LanguageSwitch_btn__2zOty label {
      color: #e4dac8;
    }
    .Navigetion_nav__1OCpV {
      background-color: rgb(23, 66, 99);
      box-shadow: rgba(27, 27, 26, 0.25) -2px -2px 4px,
        rgba(0, 0, 0, 0.25) 2px 2px 4px;
    }
    .Navigetion_NavLink__3N6LW {
      text-decoration-color: initial;
      color: rgb(116, 186, 210);
    }
    .Navigetion_link__2nPJR {
      border-color: rgb(38, 142, 164);
    }
    .Navigetion_NavLinkActive__x-n-x {
      color: rgb(252, 242, 224);
      background-color: rgb(37, 140, 162);
    }
    .css-bav0x6 {
      background-image: initial;
      background-color: rgb(173, 18, 14);
    }
    .css-1mn2q0w {
      background-image: initial;
      background-color: rgb(173, 18, 14);
    }
    .css-5evcp6 {
      background-image: initial;
      background-color: rgb(173, 18, 14);
    }
    .css-l5zsa8 {
      background-image: initial;
      background-color: rgb(173, 18, 14);
    }
    .css-10vzs4o {
      background-image: initial;
      background-color: rgb(173, 18, 14);
    }
    .css-a8gxcy {
      background-image: initial;
      background-color: rgb(173, 18, 14);
    }
    .ScrollButton_scroll__2HLqN {
      border-color: initial;
      background-image: initial;
      background-color: rgb(37, 140, 162);
    }
    .ToolsMenu_toolDots__1FBvb {
      fill: rgb(91, 208, 230);
    }
    .ToolsMenu_toolBarWrapper__3FTyI {
      background-image: initial;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .ToolsMenu_toolBar__3gVmf {
      background-image: initial;
      background-color: rgb(23, 66, 99);
    }
    .ToolsMenu_toolBar__3gVmf li {
      color: rgb(252, 242, 224);
      text-decoration-color: initial;
    }
    .ToolsMenu_toolBar__3gVmf li:hover {
      background-image: initial;
      background-color: rgb(37, 140, 162);
    }
    .ToolsMenu_toolBar__3gVmf li:hover svg {
      color: rgb(159, 203, 229);
    }
    .ToolsMenu_toolBar__3gVmf li svg {
      color: rgb(252, 242, 224);
    }
    .ToolsMenu_active__2fu90 {
      background-image: initial;
      background-color: rgb(37, 140, 162);
    }
    .Button_Button__2BYYQ {
      border-color: initial;
      color: rgb(252, 242, 224);
      background-image: initial;
      background-color: rgb(37, 140, 162);
    }
    .Details_details__2r7pA h2 {
      color: rgb(91, 208, 230);
    }
    .Details_details__2r7pA img {
      box-shadow: rgba(99, 100, 97, 0.5) 0px 0px 20px;
    }
    .Details_details__2r7pA div p a {
      text-decoration-color: initial;
    }
    .Details_details__2r7pA div p span {
      color: rgb(91, 208, 230);
      text-decoration-color: initial;
    }
    .Details_link__3yZOV {
      color: rgb(116, 186, 210);
      background-image: initial;
      background-color: rgb(27, 27, 26);
      border-color: rgb(38, 142, 164);
    }
    .Details_link__3yZOV:hover {
      color: rgb(252, 242, 224);
      background-color: rgb(37, 140, 162);
    }

    /* Override Style */
    .vimvixen-hint {
      background-color: #775602 !important;
      border-color: #dab635 !important;
      color: #fff3cc !important;
    }
    ::placeholder {
      opacity: 0.5 !important;
    }
    a[href="https://coinmarketcap.com/"] > svg[width="94"][height="16"] > path
    {
      fill: var(--darkreader-neutral-text) !important;
    }
    #edge-translate-panel-body,
    .MuiTypography-body1 {
      color: var(--darkreader-neutral-text) !important;
    }
    gr-main-header {
      background-color: #1b3a41 !important;
    }
    embed[type="application/pdf"] {
      filter: invert(100%) contrast(90%);
    }

    .Modal_content__BZbGL{
      background-color: #1b1b1a !important;
    }
    .Modal_cancelBtn__TI3bQ{
      color: #fff;
      background: #01b4e4;
      border-radius: 5px;
    }
`;
