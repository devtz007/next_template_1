module.exports = {

"[project]/src/media/images/global/logo.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/logo.9baa82fa.png");}}),
"[project]/src/media/images/global/logo.png.mjs { IMAGE => \"[project]/src/media/images/global/logo.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$media$2f$images$2f$global$2f$logo$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/media/images/global/logo.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$media$2f$images$2f$global$2f$logo$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1982,
    height: 393,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AA9CNU0nPThBMDAwLikpKSgpKSknKysrKR0dHRsUFBQTABFMPlkhOjQ+Pz8/PTw8PDtISEhGODg4Nh8fHxweHh4bf6YLs0gWyu8AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 2
};
}}),
"[project]/src/components/menus/menus_1-pagePart/menus_1-pagePart.module.scss.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "link": "menus_1-pagePart-module-scss-module__kCh6aq__link",
  "link__active": "menus_1-pagePart-module-scss-module__kCh6aq__link__active",
  "menus_1_pagePart": "menus_1-pagePart-module-scss-module__kCh6aq__menus_1_pagePart",
});
}}),
"[project]/src/components/menus/menus_1-pagePart/menus_1-pagePart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)"); // Add this import
/* Import SCSS module */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$menus$2f$menus_1$2d$pagePart$2f$menus_1$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/menus/menus_1-pagePart/menus_1-pagePart.module.scss.module.css [app-ssr] (css module)");
;
;
;
;
;
/**
 * Menus1PagePart Component
 *
 * This component renders a list of menu items as navigable links. When a link is clicked,
 * it becomes active and its information is sent back through the provided callback.
 *
 * @param menusP - Optional array of menu items to display.
 * @param Menus1PagePartCallBack - Pass the call back here.
 *
 * ```tsx
 *   <Menus1PagePart
 *     menusP=[
 *       { text: 'Home', value: 'home', link: '/' },
 *       { text: 'About', value: 'about', link: '/about' },
 *       { text: 'Contact', value: 'contact', link: '/contact' }
 *     ]
 *     Menus1PagePartCallBack={(Menus1PagePartCallBackInfo) => {
 *       console.log('🚀 ~ Menus1PagePartCallBackInfo:', Menus1PagePartCallBackInfo);
 *     }}
 *   />
 * ```
 */ const Menus1PagePart = ({ menusP, Menus1PagePartCallBack })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])(); // Add pathname hook
    // Default menus structure.
    const defaultMenus = [
        {
            text: 'devtz007',
            value: 'devtz007',
            link: '#'
        }
    ];
    // Use provided menus if available; otherwise, fall back to defaultMenus.
    const menus = menusP || defaultMenus;
    // Modify the useEffect to use the current active item based on pathname
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (Menus1PagePartCallBack) {
            const activeItem = menus.find((item)=>pathname === item.link || pathname.startsWith(`${item.link}/`)) || menus[0];
            Menus1PagePartCallBack({
                activeLinkInfo: activeItem
            });
        }
    }, [
        menus,
        pathname,
        Menus1PagePartCallBack
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$menus$2f$menus_1$2d$pagePart$2f$menus_1$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menus_1_pagePart,
        children: menus.map((item, index)=>{
            const isActive = pathname === item.link || pathname.startsWith(`${item.link}/`);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: item.link || '#',
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$menus$2f$menus_1$2d$pagePart$2f$menus_1$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$menus$2f$menus_1$2d$pagePart$2f$menus_1$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link__active : ''}`,
                "data-value": item.value,
                onClick: ()=>{
                    // Only trigger callback with the active item's info
                    if (Menus1PagePartCallBack) {
                        Menus1PagePartCallBack({
                            activeLinkInfo: item
                        });
                    }
                },
                children: item.text
            }, index, false, {
                fileName: "[project]/src/components/menus/menus_1-pagePart/menus_1-pagePart.tsx",
                lineNumber: 81,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/menus/menus_1-pagePart/menus_1-pagePart.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
};
Menus1PagePart.displayName = 'Menus1PagePart';
const __TURBOPACK__default__export__ = Menus1PagePart;
}}),
"[project]/src/components/header/header_7-pagePart/header_7-pagePart.module.scss.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "actions": "header_7-pagePart-module-scss-module__ocMzyq__actions",
  "header_7_pagePart": "header_7-pagePart-module-scss-module__ocMzyq__header_7_pagePart",
  "icon": "header_7-pagePart-module-scss-module__ocMzyq__icon",
  "link": "header_7-pagePart-module-scss-module__ocMzyq__link",
  "link_signUp": "header_7-pagePart-module-scss-module__ocMzyq__link_signUp",
  "logo": "header_7-pagePart-module-scss-module__ocMzyq__logo",
});
}}),
"[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
/* Import media */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-ssr] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRoundPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round-plus.js [app-ssr] (ecmascript) <export default as UserRoundPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$media$2f$images$2f$global$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$media$2f$images$2f$global$2f$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/media/images/global/logo.png.mjs { IMAGE => "[project]/src/media/images/global/logo.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
/* Import custom components */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$menus$2f$menus_1$2d$pagePart$2f$menus_1$2d$pagePart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/menus/menus_1-pagePart/menus_1-pagePart.tsx [app-ssr] (ecmascript)");
/* Import styles */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/header/header_7-pagePart/header_7-pagePart.module.scss.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
/**
 * A header component
 *
 * @example
 * ```tsx
 * <Header7PagePart />
 * ```
 */ const Header7PagePart = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header_7_pagePart} border_type_1`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo} icon_cont_type_1`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$media$2f$images$2f$global$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$media$2f$images$2f$global$2f$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "Company Logo",
                    width: 100,
                    height: 50,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image,
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menus1PagePart_placeHolder,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$menus$2f$menus_1$2d$pagePart$2f$menus_1$2d$pagePart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    menusP: [
                        {
                            text: 'Home',
                            value: 'home',
                            link: '/'
                        },
                        {
                            text: 'Pricing',
                            value: 'pricing',
                            link: '/pricing'
                        },
                        {
                            text: 'Feature',
                            value: 'feature',
                            link: '/feature'
                        }
                    ],
                    Menus1PagePartCallBack: (Menus1PagePartCallBackInfo)=>{
                        console.log('🚀 ~ Menus1PagePartCallBackInfo:', Menus1PagePartCallBackInfo);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link_login}`,
                        href: "#",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon} icon_cont_type_1`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                    color: "rgb(var(--first-text-color, 255, 255, 255))"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text,
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link_signUp}`,
                        href: "#",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon} icon_cont_type_1`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRoundPlus$3e$__["UserRoundPlus"], {
                                    color: "rgb(var(--first-text-color, 255, 255, 255))"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$header_7$2d$pagePart$2f$header_7$2d$pagePart$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text,
                                children: "Create account"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header/header_7-pagePart/header_7-pagePart.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
Header7PagePart.displayName = 'Header7PagePart';
const __TURBOPACK__default__export__ = Header7PagePart;
}}),

};

//# sourceMappingURL=src_9b4743c0._.js.map